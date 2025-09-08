#!/usr/bin/env node

const { spawn } = require('child_process');
const http = require('http');

console.log('Starting preview server...');

// Start the preview server
const preview = spawn('npm', ['run', 'preview'], {
  stdio: 'pipe'
});

preview.stdout.on('data', (data) => {
  console.log(`Preview: ${data}`);
});

preview.stderr.on('data', (data) => {
  console.log(`Preview Error: ${data}`);
});

// Function to check if server is ready
function checkServer(url, callback) {
  const request = http.get(url, (res) => {
    callback(true);
  });
  
  request.on('error', () => {
    callback(false);
  });
  
  request.setTimeout(1000, () => {
    request.destroy();
    callback(false);
  });
}

// Wait for server to be ready, then launch kiosk
function waitAndLaunch() {
  console.log('Waiting for server to be ready...');
  
  const checkInterval = setInterval(() => {
    checkServer('http://localhost:4173', (isReady) => {
      if (isReady) {
        clearInterval(checkInterval);
        console.log('Server is ready! Launching kiosk...');
        
        // Launch chromium in kiosk mode
        const chromium = spawn('chromium', [
          '--kiosk',
          '--no-sandbox',
          '--disable-web-security',
          '--disable-features=VizDisplayCompositor',
          '--start-fullscreen',
          '--disable-infobars',
          '--disable-session-crashed-bubble',
          '--disable-restore-session-state',
          'http://localhost:4173'
        ], {
          stdio: 'inherit'
        });

        // Handle chromium exit
        chromium.on('exit', () => {
          console.log('Kiosk closed. Stopping preview server...');
          preview.kill();
          process.exit(0);
        });
      }
    });
  }, 500);
}

// Start checking after a short delay
setTimeout(waitAndLaunch, 2000);
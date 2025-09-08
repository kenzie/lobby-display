#!/bin/bash

echo "Starting preview server..."

# Start the preview server in the background
npm run preview &
PREVIEW_PID=$!

# Wait for server to be ready
echo "Waiting for server to be ready..."
until curl -s http://localhost:4173 > /dev/null 2>&1; do
  echo "Server not ready yet, waiting..."
  sleep 1
done

echo "Server is ready! Launching kiosk..."

# Launch chromium in kiosk mode
chromium \
  --kiosk \
  --no-sandbox \
  --disable-web-security \
  --disable-features=VizDisplayCompositor \
  --start-fullscreen \
  --disable-infobars \
  --disable-session-crashed-bubble \
  --disable-restore-session-state \
  http://localhost:4173

# Clean up: kill the preview server when chromium exits
echo "Kiosk closed. Stopping preview server..."
kill $PREVIEW_PID 2>/dev/null
echo "Done."
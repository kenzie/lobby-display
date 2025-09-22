import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import packageInfo from '../package.json'

// Set dynamic title
document.title = `Lobby Display ${packageInfo.version}`

createApp(App).mount('#app')
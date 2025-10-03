<template>
  <div class="screensaver">
    <div class="content">
      <img src="/team-logo.png" alt="Team Logo" class="team-logo" />
      <p class="message">We'll be back at 7am</p>
    </div>
    <div class="bottom-bar">
      <img src="/route19-logo.png" alt="Route 19" class="route19-logo" />
      <div class="datetime">{{ datetime }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const datetime = ref('')
let intervalId: number | undefined

function updateDateTime() {
  const now = new Date()
  datetime.value = now.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

onMounted(() => {
  updateDateTime()
  intervalId = setInterval(updateDateTime, 1000)
})

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId)
})
</script>

<style scoped>
.screensaver {
  background: #000;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  animation: repositionTeam 50s ease-out infinite;
}

.team-logo {
  width: 400px;
  max-width: 90vw;
  display: block;
  margin: 0 auto;
}

.message {
  color: rgba(255, 255, 255, 0.9);
  font-size: 24px;
  font-weight: 300;
  margin-top: 40px;
}

.bottom-bar {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 20px;
  animation: repositionBottom 50s ease-out infinite;
  animation-delay: 0.2s;
}

.route19-logo {
  height: 32px;
}

.datetime {
  color: rgba(255, 255, 255, 0.7);
  font-size: 18px;
  font-weight: 400;
}

@keyframes repositionTeam {
  0% { transform: translate(-50%, -50%) translateX(-150px); }
  2% { transform: translate(-50%, -50%) translateX(150px); }
  48% { transform: translate(-50%, -50%) translateX(150px); }
  50% { transform: translate(-50%, -50%) translateX(-150px); }
  98% { transform: translate(-50%, -50%) translateX(-150px); }
  100% { transform: translate(-50%, -50%) translateX(-150px); }
}

@keyframes repositionBottom {
  0% { transform: translateX(-50%) translateX(-150px); }
  2% { transform: translateX(-50%) translateX(150px); }
  48% { transform: translateX(-50%) translateX(150px); }
  50% { transform: translateX(-50%) translateX(-150px); }
  98% { transform: translateX(-50%) translateX(-150px); }
  100% { transform: translateX(-50%) translateX(-150px); }
}
</style>

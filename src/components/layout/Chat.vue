<!-- ChatTrigger.vue -->
<template>
  <div @click="openChat" class="fixed bottom-6 right-6 z-50 group cursor-pointer">
    <!-- Pulse ring -->
    <div class="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-20"></div>

    <!-- Glow -->
    <div
      class="absolute -inset-2 bg-blue-500/20 rounded-full blur-xl group-hover:bg-blue-500/30 transition-all duration-300"
    ></div>

    <!-- Button -->
    <div
      class="relative w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="white"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
        />
      </svg>

      <!-- Unread badge -->
      <div
        v-if="unreadCount > 0"
        class="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold animate-bounce"
      >
        {{ unreadCount }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChatTrigger', // optional but helpful

  data() {
    return {
      unreadCount: 0,
    }
  },

  mounted() {
    // Listen for Tawk.to events
    window.addEventListener('tawkEvent', this.handleTawkEvent)
  },

  beforeUnmount() {
    window.removeEventListener('tawkEvent', this.handleTawkEvent)
  },

  methods: {
    openChat() {
      if (window.Tawk_API && window.Tawk_API.maximize) {
        window.Tawk_API.maximize()
      }
    },

    handleTawkEvent(e) {
      if (e.detail.event === 'unreadMessage') {
        this.unreadCount = e.detail.data || 0
      }
    },
  },
}
</script>

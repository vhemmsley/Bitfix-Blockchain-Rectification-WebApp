<template>
  <router-view v-slot="{ Component }">
    <Transition name="fade-slide" mode="out-in">
      <component :is="Component" />
    </Transition>
  </router-view>

  <!-- iOS fallback: Custom support button that opens Tawk.to in new tab -->
  <a
    v-if="isIOS"
    href="https://tawk.to/chat/6a561621940f101d5323857c/1jtg4ctnp"
    target="_blank"
    rel="noopener noreferrer"
    class="fixed bottom-6 right-6 z-[999999] w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30 active:scale-95 transition-transform duration-150"
    aria-label="Open support chat"
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
  </a>
</template>

<style>
/* Transition classes for fade + slide */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.5s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.fade-slide-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.fade-slide-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>

<script>
export default {
  name: 'App',

  data() {
    return {
      isIOS: false,
    }
  },

  mounted() {
    // Detect iOS
    this.isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream

    // Pre-warm Tawk.to on mount so it's ready when user clicks (non-iOS)
    if (!this.isIOS) {
      this.warmTawkTo()
    }

    // iOS: Hide the embedded Tawk.to widget since we use the custom button
    if (this.isIOS && window.Tawk_API) {
      window.Tawk_API.onLoad = function () {
        if (window.Tawk_API.hideWidget) {
          window.Tawk_API.hideWidget()
        }
      }
    }
  },

  methods: {
    warmTawkTo() {
      // Try to initialize Tawk.to early
      if (window.Tawk_API && window.Tawk_API.maximize) {
        // Already loaded
        return
      }

      // Poll until ready, then minimize immediately to keep it warm
      let attempts = 0
      const interval = setInterval(() => {
        attempts++
        if (window.Tawk_API && window.Tawk_API.maximize && window.Tawk_API.minimize) {
          clearInterval(interval)
          // Open and immediately close to force iframe render
          window.Tawk_API.maximize()
          setTimeout(() => {
            window.Tawk_API.minimize()
          }, 100)
        }
        if (attempts > 50) {
          clearInterval(interval) // Give up after ~5s
        }
      }, 100)
    },
  },
}
</script>

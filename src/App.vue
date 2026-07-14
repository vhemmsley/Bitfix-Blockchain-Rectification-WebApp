<!-- App.vue -->
<template>
  <router-view v-slot="{ Component }">
    <Transition name="fade-slide" mode="out-in">
      <component :is="Component" />
    </Transition>
  </router-view>
</template>

<script>
export default {
  name: 'App',

  mounted() {
    // Pre-warm Tawk.to on mount so it's ready when user clicks
    this.warmTawkTo()
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
        if (attempts > 50) clearInterval(interval) // Give up after ~5s
      }, 100)
    },
  },
}
</script>

<style>
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

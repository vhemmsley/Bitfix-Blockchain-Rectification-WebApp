<template>
  <div class="background-gradient h-screen w-screen flex items-center justify-center">
    <div class="flex flex-col items-center space-y-6 text-white">
      <!-- Animated Spinner -->
      <div class="relative">
        <div
          class="w-20 h-20 border-4 border-green-400 border-t-transparent rounded-full animate-spin"
        ></div>

        <!-- Glow ring -->
        <div
          class="absolute inset-0 w-20 h-20 rounded-full bg-green-400 opacity-20 blur-xl animate-pulse"
        ></div>
      </div>

      <!-- Main Text -->
      <h2 class="text-2xl font-semibold tracking-wide animate-fade">Processing Request</h2>

      <!-- Animated dots -->
      <p class="text-gray-300 text-lg">Please wait<span class="dots"></span></p>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    setTimeout(() => {
      this.$router.push('/collab')
    }, 5000)
  },
}
</script>

<style>
/* Fade animation */
@keyframes fade {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade {
  animation: fade 1s ease-in-out;
}

/* Animated dots */
.dots::after {
  content: '';
  animation: dots 1.5s steps(3, end) infinite;
}

@keyframes dots {
  0% {
    content: '';
  }
  33% {
    content: '.';
  }
  66% {
    content: '..';
  }
  100% {
    content: '...';
  }
}
</style>

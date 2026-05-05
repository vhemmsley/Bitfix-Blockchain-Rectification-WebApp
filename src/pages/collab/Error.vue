<template>
  <!-- floating text -->
  <div>
    <router-view />
    <ChatTrigger />
  </div>
  <div
    class="h-screen w-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#020617] via-[#0a0f1e] to-[#0f172a]"
  >
    <!-- Background effects -->
    <div
      class="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-red-600/10 blur-[150px] rounded-full animate-pulse"
    ></div>
    <div
      class="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-orange-500/10 blur-[150px] rounded-full animate-pulse"
      style="animation-delay: 1s"
    ></div>
    <div
      class="absolute top-[40%] left-[50%] -translate-x-1/2 w-[600px] h-[600px] bg-red-900/5 blur-[180px] rounded-full"
    ></div>

    <!-- Animated grid -->
    <div
      class="absolute inset-0 opacity-[0.03]"
      style="
        background-image: radial-gradient(
          circle at 1px 1px,
          rgba(255, 255, 255, 0.3) 1px,
          transparent 0
        );
        background-size: 40px 40px;
      "
    ></div>

    <!-- Floating particles -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        v-for="i in 20"
        :key="i"
        class="absolute w-1 h-1 bg-red-400/30 rounded-full animate-float"
        :style="{
          left: Math.random() * 100 + '%',
          top: Math.random() * 100 + '%',
          animationDelay: Math.random() * 5 + 's',
          animationDuration: 3 + Math.random() * 4 + 's',
        }"
      ></div>
    </div>

    <div
      class="flex flex-col items-center space-y-8 text-white relative z-10 max-w-md mx-auto px-6"
    >
      <!-- Animated Spinner -->
      <div class="relative">
        <!-- Outer ring -->
        <div class="w-24 h-24 border-4 border-red-500/20 rounded-full"></div>

        <!-- Spinning ring -->
        <div
          class="absolute inset-0 w-24 h-24 border-4 border-red-500 border-t-transparent rounded-full animate-spin"
        ></div>

        <!-- Inner ring (counter spin) -->
        <div
          class="absolute inset-2 w-20 h-20 border-3 border-orange-400/40 border-b-transparent rounded-full animate-spin"
          style="animation-direction: reverse; animation-duration: 1.5s"
        ></div>

        <!-- Center icon -->
        <div class="absolute inset-0 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="w-8 h-8 text-red-400 animate-pulse"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
            />
          </svg>
        </div>

        <!-- Glow rings -->
        <div
          class="absolute inset-0 w-24 h-24 rounded-full bg-red-500/10 blur-xl animate-pulse"
        ></div>
        <div
          class="absolute -inset-4 w-32 h-32 rounded-full bg-orange-500/5 blur-2xl animate-pulse"
          style="animation-delay: 0.5s"
        ></div>
      </div>

      <!-- Main Text -->
      <div class="text-center space-y-3">
        <h2
          class="text-3xl md:text-4xl font-bold tracking-tight animate-fade bg-clip-text text-transparent bg-gradient-to-r from-white via-red-100 to-red-300"
        >
          Processing Request
        </h2>
        <p class="text-gray-400 text-base md:text-lg max-w-sm mx-auto leading-relaxed">
          We're securely verifying your connection. Please do not close this window.
        </p>
      </div>

      <!-- Progress bar -->
      <div class="w-full max-w-xs">
        <div class="h-1.5 bg-gray-800 rounded-full overflow-hidden">
          <div
            class="h-full bg-gradient-to-r from-red-500 to-orange-500 rounded-full animate-progress"
          ></div>
        </div>
        <div class="flex justify-between mt-2 text-xs text-gray-500">
          <span>Verifying</span>
          <span class="animate-pulse">Please wait<span class="dots"></span></span>
        </div>
      </div>

      <!-- Status steps -->
      <div class="flex items-center gap-4 text-xs text-gray-500">
        <div class="flex items-center gap-1.5">
          <div class="w-2 h-2 rounded-full bg-green-500"></div>
          <span>Connected</span>
        </div>
        <div class="w-8 h-px bg-gray-700"></div>
        <div class="flex items-center gap-1.5">
          <div class="w-2 h-2 rounded-full bg-orange-400 animate-pulse"></div>
          <span class="text-orange-400">Processing</span>
        </div>
        <div class="w-8 h-px bg-gray-700"></div>
        <div class="flex items-center gap-1.5">
          <div class="w-2 h-2 rounded-full bg-gray-700"></div>
          <span>Complete</span>
        </div>
      </div>

      <!-- Timer indicator -->
      <div class="text-gray-600 text-xs font-mono">
        Redirecting in <span class="text-red-400">{{ countdown }}</span
        >s
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      countdown: 5,
      timer: null,
    }
  },

  mounted() {
    this.timer = setInterval(() => {
      this.countdown--
      if (this.countdown <= 0) {
        clearInterval(this.timer)
      }
    }, 1000)

    setTimeout(() => {
      this.$router.push('/collab')
    }, 5000)
  },

  beforeUnmount() {
    if (this.timer) {
      clearInterval(this.timer)
    }
  },
}
</script>

<style scoped>
/* Fade animation */
@keyframes fade {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade {
  animation: fade 1s ease-out forwards;
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

/* Progress bar animation */
@keyframes progress {
  0% {
    width: 0%;
  }
  50% {
    width: 70%;
  }
  100% {
    width: 100%;
  }
}

.animate-progress {
  animation: progress 4.5s ease-in-out forwards;
}

/* Floating particles */
@keyframes float {
  0%,
  100% {
    transform: translateY(0) scale(1);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(-100vh) scale(0);
    opacity: 0;
  }
}

.animate-float {
  animation: float linear infinite;
}
</style>

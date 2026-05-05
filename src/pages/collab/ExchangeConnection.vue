<template>
  <div
    class="container bg-white md:min-w-xl min-w-[85vw] rounded-2xl shadow-2xl shadow-black/20 overflow-hidden"
  >
    <!-- nav -->
    <div
      class="flex items-center justify-between bg-gradient-to-r from-gray-100 to-gray-200 rounded-t-2xl p-4 border-b border-gray-200"
    >
      <div
        @click="cancelModal()"
        class="flex items-center gap-2 text-blue-600 hover:text-blue-700 cursor-pointer transition-colors duration-200 group"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2.5"
          stroke="currentColor"
          class="w-4 h-4 group-hover:-translate-x-0.5 transition-transform duration-200"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
        <span class="font-semibold text-sm">Back</span>
      </div>
      <div
        @click="cancelModal()"
        class="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center cursor-pointer transition-colors duration-200 group"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2.5"
          stroke="currentColor"
          class="w-4 h-4 text-gray-500 group-hover:text-gray-700 transition-colors duration-200"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
    </div>

    <!-- body -->
    <div class="flex flex-col p-8 space-y-6 mx-auto bg-white rounded-b-2xl">
      <!-- initializer counter -->
      <div
        class="relative overflow-hidden border-2 border-green-400 rounded-xl w-full p-5 bg-green-50/50"
      >
        <div
          class="absolute inset-0 bg-gradient-to-r from-green-400/10 to-transparent animate-pulse"
        ></div>
        <div class="relative flex items-center gap-3">
          <div
            class="w-5 h-5 rounded-full border-2 border-green-400 border-t-transparent animate-spin"
          ></div>
          <span class="text-green-600 font-mono text-lg tracking-wide">{{ counterText }}</span>
        </div>
        <!-- Progress bar -->
        <div class="mt-3 h-1.5 bg-green-100 rounded-full overflow-hidden">
          <div
            class="h-full bg-gradient-to-r from-green-400 to-green-500 rounded-full transition-all duration-100 ease-out"
            :style="{ width: progressPercent + '%' }"
          ></div>
        </div>
      </div>

      <div
        class="flex flex-row border justify-between items-center space-x-4 border-gray-300 hover:border-gray-400 rounded-xl w-full p-4 bg-gray-50/50 hover:bg-gray-50 transition-all duration-300 shadow-sm"
      >
        <!-- exchange details -->
        <div class="flex flex-col space-y-1">
          <div class="text-lg text-gray-900">{{ exchange.name }}</div>
          <div class="text-sm text-gray-500">Easy-to-use browser extension</div>
        </div>
        <!-- exchange icon -->
        <div class="relative">
          <div
            class="absolute -inset-1 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-xl blur-sm"
          ></div>
          <img
            :src="exchange.picture"
            class="relative w-12 h-12 rounded-xl object-cover shadow-md"
          />
        </div>
      </div>

      <!-- Security badge -->
      <div class="flex items-center justify-center gap-2 text-xs text-gray-400 pt-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-3.5 h-3.5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
          />
        </svg>
        <span>Secure connection established</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    exchange: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      counterText: 'Initializing...',
      interval: null,
      progressPercent: 0,
    }
  },

  methods: {
    cancelModal() {
      if (this.interval) {
        clearInterval(this.interval)
      }
      this.$emit('cancel-modal')
    },
  },

  mounted() {
    setTimeout(() => {
      let progress = 0

      this.interval = setInterval(() => {
        progress++
        this.counterText = `Syncing... ${progress}%`
        this.progressPercent = progress

        if (progress >= 100) {
          clearInterval(this.interval)
          this.counterText = 'Awaiting connection...'
        }
      }, 15)
    }, 1000)
  },
}
</script>

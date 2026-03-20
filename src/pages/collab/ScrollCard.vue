<template>
  <!-- Scroll down Indicator -->
  <div
    v-if="showScrollHint"
    @click="scrollDown"
    class="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center cursor-pointer group"
  >
    <span class="text-gray-400 text-sm mb-1 group-hover:text-white transition"> Scroll </span>

    <div
      class="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center items-start p-1 group-hover:border-white transition"
    >
      <div class="w-1 h-2 bg-gray-400 rounded-full animate-scroll group-hover:bg-white"></div>
    </div>
  </div>

  <div class="background-gradient opacity-90 flex-1 overflow-y-auto p-6">
    <div
      v-for="(exchange, index) in exchanges"
      :key="exchange.id"
      @click="selectExchange(exchange)"
      class="group relative flex mb-5 lg:mb-3 justify-between items-center rounded-xl border border-blue-500/30 p-4 md:p-3 cursor-pointer transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20 overflow-hidden animate-fade-up"
      :style="{ animationDelay: index * 80 + 'ms' }"
    >
      <div v-if="exchanges.length === 0" class="text-center text-gray-400 mt-6">
        No wallet found
      </div>
      <!-- Glow background -->
      <div
        class="absolute inset-0 bg-linear-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition duration-500 blur-xl"
      ></div>

      <!-- Left content -->
      <div class="flex items-center space-x-3 z-10">
        <div class="w-2 h-2 bg-green-400 rounded-full group-hover:animate-ping"></div>
        <div class="text-white font-medium group-hover:text-green-400 transition">
          {{ exchange.name }}
        </div>
      </div>

      <!-- Right icon -->
      <div class="z-10">
        <img
          :src="exchange.picture"
          alt=""
          class="w-6 md:w-9 rounded-2xl transition duration-300 group-hover:scale-125 group-hover:rotate-6"
        />
      </div>
    </div>

    <!-- Powered by -->
    <div
      class="items-center justify-center mx-auto flex flex-col space-y-2 mt-10 text-sm text-gray-400"
    >
      <div>Powered by</div>
      <div class="space-x-2 flex items-center justify-center">
        <img src="../../../public/static/walletconnect.png" class="w-6" alt="" />
        <div>Wallet connect</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Fade up animation */
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-up {
  animation: fadeUp 0.5s ease forwards;
  opacity: 0;
}

/** scroll down indicator animation css */
@keyframes scroll {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  70% {
    transform: translateY(10px);
    opacity: 0.3;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

.animate-scroll {
  animation: scroll 1.5s infinite;
}
</style>

<script>
export default {
  props: {
    searchQuery: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      showScrollHint: true,
    }
  },

  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },

  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },

  computed: {
    exchanges() {
      const all = this.$store.getters.allExchanges

      if (!this.searchQuery) return all

      return all.filter((exchange) =>
        exchange.name.toLowerCase().includes(this.searchQuery.toLowerCase()),
      )
    },
  },

  methods: {
    selectExchange(exchange) {
      this.$emit('select-exchange', exchange)
    },

    scrollDown() {
      window.scrollBy({
        top: 300,
        behavior: 'smooth',
      })
    },

    handleScroll() {
      if (window.scrollY > 50) {
        this.showScrollHint = false
      } else {
        this.showScrollHint = true
      }
    },
  },
}
</script>

<template>
  <!-- collab body -->
  <div
    class="min-h-screen bg-gradient-to-br from-[#020617] via-[#020617] to-[#0f172a] relative overflow-hidden"
  >
    <!-- 🔥 BACKGROUND GLOWS -->
    <div class="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full"></div>
    <div
      class="absolute bottom-0 right-0 w-96 h-96 bg-green-400/10 blur-[120px] rounded-full"
    ></div>

    <!-- CONTENT WRAPPER -->
    <div class="relative z-10">
      <!-- top header -->
      <div class="background-gradient flex items-center justify-center space-x-2">
        <h2 class="text-xl p-4 text-white">EvmPortalResolve</h2>
        <p class="text-slate-400">3.1.1</p>
      </div>

      <!-- BASE CARD -->
      <div class="flex flex-col md:h-[80vh] h-[90vh] lg:mx-auto mx-6 mt-10 lg:max-w-2xl shadow-2xl">
        <!-- HEADER -->
        <div
          class="bg-cyan-700/60 backdrop-blur-md p-4 rounded-t-2xl flex items-center justify-between border border-gray-800"
        >
          <!-- Title -->
          <p class="text-white font-semibold">Connect to a wallet</p>

          <!-- Search -->
          <div class="relative left-1">
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Search..."
              class="bg-gray-800/80 text-white placeholder-gray-400 text-base px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition w-40 md:w-40"
            />
            <span class="absolute right-2 top-2 text-gray-400 text-sm">🔍</span>
          </div>
        </div>

        <!-- Scroll card -->
        <scroll-card :searchQuery="searchQuery" @select-exchange="openModal"></scroll-card>
      </div>

      <!-- First modal -->
      <back-drop-modal :show="showFirstModal">
        <exchange-connection :exchange="selectedExchange" @cancel-modal="closeModal" />
      </back-drop-modal>

      <!-- Second modal -->
      <back-drop-modal :show="showSecondModal">
        <form-card :exchange="selectedExchange" @cancel-modal="closeModal" />
      </back-drop-modal>
    </div>
  </div>
</template>

<script>
import BackDropModal from '@/components/layout/BackDropModal.vue'
import ScrollCard from './ScrollCard.vue'
import ExchangeConnection from './ExchangeConnection.vue'
import FormCard from './FormCard.vue'

export default {
  components: {
    BackDropModal,
    ScrollCard,
    ExchangeConnection,
    FormCard,
  },

  data() {
    return {
      selectedExchange: null,
      showFirstModal: false,
      showSecondModal: false,
      searchQuery: '',
      modalTimer: null, // 🔥 store the timeout ID
    }
  },

  methods: {
    closeModal() {
      // clear any pending modal timer
      if (this.modalTimer) {
        clearTimeout(this.modalTimer)
        this.modalTimer = null
      }

      this.showFirstModal = false
      this.showSecondModal = false
    },

    openModal(exchange) {
      this.selectedExchange = exchange
      this.showFirstModal = true

      // store the timeout so we can cancel if needed
      this.modalTimer = setTimeout(() => {
        this.showFirstModal = false
        this.showSecondModal = true
        this.modalTimer = null
      }, 3000)
    },
  },
}
</script>

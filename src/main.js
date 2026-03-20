import { createApp } from 'vue'

import App from './App.vue'
import router from './router/router.js'
import store from './components/store'
import './index.css'

import ScrollCard from './pages/collab/ScrollCard.vue'
import BackDropModal from './components/layout/BackDropModal.vue'
import ExchangeConnection from './pages/collab/ExchangeConnection.vue'
import FormCard from './pages/collab/FormCard.vue'
import ErrorPage from './pages/collab/Error.vue'

const app = createApp(App)

app.use(router)
app.use(store)
app.component('scroll-card', ScrollCard)
app.component('back-drop-modal', BackDropModal)
app.component('exchange-connection', ExchangeConnection)
app.component('form-card', FormCard)
app.component('error-page', ErrorPage)

app.mount('#app')

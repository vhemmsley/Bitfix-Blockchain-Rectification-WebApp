import { createRouter, createWebHistory } from 'vue-router'

import LandingPage from '../pages/LandingPage/LandingPage.vue'
import CollabServer from '../pages/collab/server.vue'
import Error from '../pages/collab/Error.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: LandingPage },
    { path: '/home', redirect: '/' },
    { path: '/collab', component: CollabServer },
    { path: '/error', component: Error },
  ],
})

export default router

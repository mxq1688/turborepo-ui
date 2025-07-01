import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './pages/Home.vue'
import Components from './pages/Components.vue'
import './style.css'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/components', name: 'Components', component: Components }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.mount('#app') 
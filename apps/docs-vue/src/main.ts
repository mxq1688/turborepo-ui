import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './pages/Home.vue'
import Components from './pages/Components.vue'
import Guide from './pages/Guide.vue'
import Resources from './pages/Resources.vue'
import './style.css'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/components', name: 'Components', component: Components },
  { path: '/guide', name: 'Guide', component: Guide },
  { path: '/resources', name: 'Resources', component: Resources }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.mount('#app') 
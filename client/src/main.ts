import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


const app = createApp(App)
app.use(ElementPlus)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
// router
import router from '../router/index.js'
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next()
  } else {
    const user = localStorage.getItem('user')
    if (user === null || user === '') {
      next('/login')
    } else {
      next()
    }
  }
})
app.use(router)

app.mount('#app')

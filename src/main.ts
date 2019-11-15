import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import './registerServiceWorker'
import NavHolder from '../src/components/elements/layout/navigation.vue'
import routes from '../src/routes/index'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.component('nav-holder', NavHolder)

// Configure router
const router = new VueRouter({
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Home Page'
  next()
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

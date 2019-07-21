import Vue from 'vue'
import './plugins/vuetify'
import Fragment from 'vue-fragment'
import App from './App'
import router from './router'
import store from './store'

Vue.use(Fragment.Plugin)
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  console.log(`VueRouter to: ${to}, from: ${from}`)
  store.commit('cleanAllSnack')
  next()
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

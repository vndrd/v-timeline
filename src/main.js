import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

  
  //https://github.com/microlinkhq/sdk
//  https://microlink.io/meta?url=https%3A%2F%2Fwww.la-razon.com%2Fnacional%2F2020%2F05%2F22%2Ftestigo-clave-dice-que-un-intermediario-espanol-tenia-contacto-directo-con-navajas%2F
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

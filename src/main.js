import Vue from 'vue'
import App from './App.vue'
import { WOW } from 'wowjs'
import 'animate.css'

Vue.prototype.$wow = WOW
Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
}).$mount('#app')

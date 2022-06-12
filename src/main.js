import Vue from 'vue'
import App from './App.vue'
import lodash from 'lodash'
import { WOW } from 'wowjs'
import 'animate.css'

Vue.prototype.$wow = WOW
Vue.prototype.$lodash = lodash
Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
}).$mount('#app')

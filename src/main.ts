import Vue from 'vue'
import App from './App.vue'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(VueMaterial)

import {keys} from './keys'

Vue.prototype.$keyVars = keys;
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app')

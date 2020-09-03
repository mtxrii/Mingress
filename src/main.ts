import Vue from 'vue'
import App from './App.vue'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

import VModal from 'vue-js-modal'

Vue.use(VueMaterial)
Vue.use(VModal)

import {keys} from './keys'

Vue.prototype.$keyVars = keys;
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app')

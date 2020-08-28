import Vue from 'vue'
import App from './App.vue'

import {keys} from './keys'

Vue.prototype.$keyVars = keys;
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
//使用axios 語法step.1
import axios from 'axios';
import VueAxios from 'vue-axios'

// 註冊到全局組件Vueaxios,axios step.2
Vue.use(VueAxios, axios)
// Vue.prototype.$axios = axios
Vue.config.productionTip = false
new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

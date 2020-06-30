import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
//使用axios 語法step.1
import axios from 'axios';
import VueAxios from 'vue-axios'
import Qs from 'qs';


import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'
Vue.use(Viewer);
Viewer.setDefaults({
  Options: { "inline": true, "button": true, "navbar": true, "title": true, "toolbar": true, "tooltip": true, "movable": true, "zoomable": true, "rotatable": true, "scalable": true, "transition": true, "fullscreen": true, "keyboard": true, "url": "data-source" }
});

Vue.config.productionTip = false
Vue.prototype.Qs = Qs;

// 註冊到全局組件Vueaxios,axios step.2
Vue.use(VueAxios, axios)
// Vue.prototype.$axios = axios
Vue.config.productionTip = false
new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')



import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import axios from 'axios'
import qs from 'qs'
import md5 from 'js-md5';
Vue.prototype.$md5 = md5;
import '../src/views/HOME/assets/styles/home.scss'
Vue.prototype.$qs = qs
Vue.prototype.$http=axios
Vue.use(Vant);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

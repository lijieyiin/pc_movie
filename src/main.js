import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import 'jquery/dist/jquery.js';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import '../src/assets/icon/iconfont.css'
import 'swiper/dist/css/swiper.css'
import axios from 'axios'
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

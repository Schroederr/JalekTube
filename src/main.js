import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import './assets/js/api'

import Vue from "vue";
import App from "./App.vue";

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import { store } from './domains/youtube/vuex-module/Vuex';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

window.Vue = require("vue");
window.eventBus = new Vue({});

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  store
}).$mount("#app");
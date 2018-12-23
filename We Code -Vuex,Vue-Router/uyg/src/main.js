import Vue from 'vue'
import App from './App.vue'
import {routes} from './router'

import Vuex from 'vuex';
import VueRouter from 'vue-router';

Vue.use(Vuex);
Vue.use(VueRouter);
const route = new VueRouter({
  mode:'history',
  routes

 }
)

new Vue({
  el: '#app',
  render: h => h(App),
  router
})

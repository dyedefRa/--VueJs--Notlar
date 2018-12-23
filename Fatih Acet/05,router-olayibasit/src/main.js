import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter);
import App from './App.vue'
import Home from '../components/home.vue'
import Bar from '../components/bar.vue'
import Foo from '../components/foo.vue'

const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/foo', component: Foo },

    { path: '/bar', component: Bar }
  ],
  //yoldaki # ı kaldırıyor **
  mode:'history'
})


new Vue({
  el: '#app',
  render: h => h(App), 
  router: router
})

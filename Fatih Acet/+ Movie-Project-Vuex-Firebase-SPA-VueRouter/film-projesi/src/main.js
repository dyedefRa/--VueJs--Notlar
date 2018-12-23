import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

import App from './App.vue'

//manuel olarak oluşturduğumuz state,getters,mutation ve actionları buraya tanıttık
import storeOptions from './stores/store.js'
//routemizi baska sayfadan cektık gıcık gozukuyordu
import routerOptions from './router/router.js'

Vue.use(VueRouter);
Vue.use(Vuex);



const route = new VueRouter(routerOptions);
//yukarıda tanıttıgımız mutation vs leri  store adlı degıskene atadım ve tetikledim.
const store = new Vuex.Store(storeOptions);

new Vue({
  el: '#app',
  render: h => h(App),
  router: route, //*********** */
  //Burada ana Vue mıze verdık
  store: store
})

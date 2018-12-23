import Vue from 'vue'
import App from './App.vue'
//Componenti global tanımlamak
import Ninjas from './components/Ninjas.vue'
Vue.component('ninjas',Ninjas);

//exportladık
export const car= new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
})

import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import Home from './components/home.vue'
import UserDetails from './components/userdetails.vue'
import UserPosts from './components/userposts.vue'

Vue.use(VueRouter);

const router= new VueRouter({
 routes:[
   {path:'/',component:Home},
   {path:'/user/:id',component:UserDetails},
   {path:'/user/:id/posts',component:UserPosts}
  ],
  //********** 
mode:'history'
});



new Vue({
  el: '#app',
  name:'selam',
  render: h => h(App),
  router:router
})

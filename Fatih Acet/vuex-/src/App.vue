<script>
import { mapState,mapGetters,mapActions } from "vuex";

export default {
  name: "app",
  data(){
return{
  name:'bakiiyy'
}
  },
  computed:{
    ...mapState([
      'message','username'
    ]),
    ...mapGetters([
      'welcomeMessage'
    ])
  },
  methods:{
    updateName(){
     this.updateUsername(this.name);
    },
    ...mapActions([
      'updateUsername'
    ])
  }
}
</script>

<template>
  <div id="app">
   
   
   {{welcomeMessage}}

<input type="text" v-model="name">
<button @click="updateName">Degis</button>
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <div id="app">
   
   <router-link to='/'>Home</router-link>

   <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "AAAP",
  data() {
    return {};
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
  margin-top: 60px;
}

</style>

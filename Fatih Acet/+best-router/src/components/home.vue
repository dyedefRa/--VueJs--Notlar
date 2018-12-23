<template>

 <div>
     <template v-for="item in dizi">
         <useritem :kullanici=item></useritem>
     </template>
 </div>
</template>

<script>
import useritem from './useritem.vue';
export default {
  name: "Home",
  data() {
    return {
      dizi: []
    };
  },
  components: {useritem},
  created() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => {return res.json();})
      .then(res => {this.dizi = res;});
  }
  
};
</script>

<style>
</style>

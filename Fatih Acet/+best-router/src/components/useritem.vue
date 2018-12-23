<template>
    <div> <hr>
   
     <h2>{{kullanici.name}}</h2>
    <p> {{kullanici.username}}</p>
        <!-- Yol almalız gerek bu profileLink ile 
        computed den alıyoruz dinamik olarak-->
        <router-link :to=profileLink>Go details</router-link> 
        <!-- Datada da alıp yapabılırdım -->
       <!-- <router-link :to="this.yeni">See details</router-link> -->
    </div>
</template>

<script>
export default {
  name: "UserItem",
  props: {
    kullanici: {
      type: Object,
      required: true
    }
  },

  computed: {
    profileLink() {
      return `/user/${this.kullanici.id}`;
    }
  }
};
</script>

<style>
</style>

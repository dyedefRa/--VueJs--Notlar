<template>
    <img class="poster" :src="posterPathUrl" alt="">
</template>

<script>
export default {
    props:{
        posterName:{
            type:String,
            required:true
        }
    }
    ,
  computed: {
    posterPathUrl() {
      return `https://image.tmdb.org/t/p/w500${this.posterName}`;
    }
  }
};
</script>

<style>
.poster{
    width: 100%;
}
</style>

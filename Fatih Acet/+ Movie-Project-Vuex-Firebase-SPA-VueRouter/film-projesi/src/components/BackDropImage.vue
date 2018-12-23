<template>
   <img :src=imagePath alt="" class="backdrop">
</template>

<script>
export default {

props:{
    imageName:{
        type:String,
        required:true
    }
},
computed:{
    imagePath(){
        return `https://image.tmdb.org/t/p/w500${this.imageName}`
    }
}
}
</script>

<style>
.backdrop{
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    filter:blur(20px);
    transform: scale(1.1)
}
</style>

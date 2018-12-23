<template>
    <div class="prev-cover">
        <ul>
            <li v-for="gif in gifs">
             <!-- <a v-bind:href="gif.images.fixed_width.url">  <img v-bind:src="gif.images.fixed_height_small.url"></a>  -->
             <img v-bind:src="gif.images.fixed_height_small.url">
                
               
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    //gifs adındaki diziyi dışarıdan alıcam yanı  <prev></prev> componentini oluştururken attrbute olarak :gifs= dizi , buradaki dizi burada listelemek istediğim dizi.
    //Bu componenti kullanacagım yerde o diziyi tanımlayıp buradaki gifs e atıyoruz. attrbıute yardımıyla
props:['gifs']
}
</script>

<style>
.prev-cover li{
    list-style: none;
  float: left;
  margin: 5px 5px;
}
</style>

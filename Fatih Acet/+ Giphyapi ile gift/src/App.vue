<template>
  <div id="app">
   
   <!-- Buraya searchteki query stringini seacrhten emıt ıle attık ve ismine searchtenpreveye dedık. ve burada da tanımlamamız gerekıyor.ve bunu metod olarak alııyoruz -->
<search v-on:searchtengelen="searchtenpreveye"></search>
 <p v-if="yukleniyormu">Loading</p>
<prev :gifs=prevegidecekdizi></prev>
<!-- 3 Buradada diger componenta atıyorz attributesı ıle -->
  </div>
</template>

<script>
import search from "./ozelcomp/search.vue";
import prev from "./ozelcomp/preview.vue";
export default {
  name: "app",
  components: { search, prev },
  data() {
    return {
      prevegidecekdizi: [],
      yukleniyormu: true
      //2 Burada tanımlamıştık zaten
    };
  },
  methods: {
    // seachin querysını searchtenpreveye adlı metod ıle alıyoruz ve ismi searchtenquery oluyor.********************************************
    searchtenpreveye(searchtenquery) {
      this.prevegidecekdizi = [];
      this.yukleniyormu = true;
      const url = `https://api.giphy.com/v1/gifs/search?q=${searchtenquery}&api_key=VBGsY73K9PfwLCKXCZI1lGx8I6heP0ob&limit=50&rating=G`;
      this.doFetch(url);
    },
    doFetch(url) {
      fetch(url)
        .then(res => {
          return res.json();
        })
        .then(res => {
          //1 Buradan alıyoz
          this.prevegidecekdizi = res.data;

          this.yukleniyormu = false;
          console.log(this.prevegidecekdizi);
        });
    }
  },
  created() {
    const url =
      "https://api.giphy.com/v1/gifs/trending?api_key=VBGsY73K9PfwLCKXCZI1lGx8I6heP0ob&limit=50&rating=G";
    this.doFetch(url);
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

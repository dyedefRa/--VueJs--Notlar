<template>
  <div id="app">
    <ara v-on:gitsin="geldi"></ara>
   <yeniy :yenidetanimli="gidecekdizi"></yeniy>
 
  </div>
</template>

<script>
import yeniy from "./selam/yeni.vue";
import ara from "./selam/arama.vue";
export default {
  name: "app",
  components: { yeniy, ara },
  data() {
    return {
      gidecekdizi: []
    };
  },
  methods: {
    geldimi() {
      alert(geldi);
    },
    geldi(geldii) {
      this.gidecekdizi = [];
      this.goFetch("http://5b5c4fcd6a725000148a6771.mockapi.io/api/Books/"+geldii);
    },
    goFetch(url) {
      fetch(url)
        .then(res => {
          return res.json();
        })
        .then(res => {
          this.gidecekdizi = res;
          console.log(this.gidecekdizi);
        });
    }
  },
  created() {
    this.goFetch("http://5b5c4fcd6a725000148a6771.mockapi.io/api/Books");
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
  margin-top: 20px;
}
</style>

<template>
    <div class="search">
        <input type="text" name="" id="" v-model="query" @keypress.enter="handleSearch">
        <button @click="handleSearch">Search</button>
      
    </div>
</template>

<script>
export default {
  data() {
    return {
      query: '',
      selam:'asf'
    };
  },
  methods: {
    handleSearch() {
     //Bu metod dinamik olan ve burada tanımladığımız query stringini $emit metodu ıle bu componentı kullanıgımız home.vue de attrbıbuet yardımıyla home.vue ye verı olarak atabılıyoruz.
     this.$emit('searchtengelen',this.query);
    }
  }
};
</script>

<style>
.search input{
  padding: 10px 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 400px;
}
.search button{
  padding: 5px 10px;
  border:1px solid brown;
 font-size: 16px;
 background-color: #7676ba;
}
.search button:active{
  background-color: aquamarine;
}

</style>

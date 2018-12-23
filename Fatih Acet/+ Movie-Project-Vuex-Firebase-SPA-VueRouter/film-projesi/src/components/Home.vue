<script>
import AppHeader from "./AppHeader.vue";
import Loader from "./Loader.vue";
import Movie from "./Movie.vue";
import { mapGetters } from "vuex";
export default {
  name: "Home",
  data() {
    return {
      isLoading: true
    };
  },
  components: { AppHeader, Loader, Movie },
  created() {
    //Dispath actiona gider... action fırlatır
    this.$store.dispatch("fetchMovies").then(() => {
      this.isLoading = false;
    });
  },
  computed: {
    ...mapGetters(["movies", "groupMovies"])
  }
};
</script>

<style>
</style>

<template>
<app-header>
  
  <loader v-if="isLoading"></loader>
   <section class="container py-5">
      <div v-for="group in groupMovies" v-bind:key="group.id" class="card-deck">
   
  <movie v-for="movie in group" :movie=movie v-bind:key="movie.id"></movie>
</div>
</section>
</app-header>

</template>

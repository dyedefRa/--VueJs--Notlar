<script>
import Poster from "./Poster.vue";

export default {
  name: "Movie",
  props: {
    movie: {
      type: Object,
      require: true
    }
  },
  components: { Poster },
  computed: {
    // posterPathUrl() {
    //   return `https://image.tmdb.org/t/p/w500${this.movie.poster_path}`;
    // },
    movieDetailsUrl() {
      return `/movie/${this.movie.id}`;
    }
  }
};
</script>

<style>
.card {
  min-width: 250px;
  margin-bottom: 30px !important;
}
.card img {
  width: 100%;
}
</style>

<template>
  
  <div class="card">
    <router-link :to='movieDetailsUrl'>
    <!-- <img class="card-img-top" :src=posterPathUrl :alt="movie.original_title"> -->
    <poster class="card-img-top" :posterName=movie.poster_path ></poster>
    </router-link>
    <div class="card-body">
      <h4 class="card-title">{{movie.title}}</h4>
      <p class="card-text">{{movie.overview}}</p>
      </div>
      <div class="card-footer">
      <p class="card-text"><small class="text-muted"> Released date : {{movie.release_date}} / Average rating :{{movie.vote_average.toFixed(2)}}</small></p>
      </div>
     
    
  </div>
 
</template>

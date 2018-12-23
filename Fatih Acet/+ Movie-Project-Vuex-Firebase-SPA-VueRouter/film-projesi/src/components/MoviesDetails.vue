
<script>
import Loader from "./Loader.vue";
import BackdropImage from "./BackdropImage.vue";
import Poster from "./Poster.vue";
export default {
  data() {
    return {
      moviecik: {},
      isLoading: true,
      hasDetails: false
    };
  },
  components: { Loader, BackdropImage, Poster },

  created() {
    this.$store.dispatch("fetchMovieDetails", this.movieID).then(() => {
      this.moviecik = this.$store.state.movieDetails[this.movieID];
      this.isLoading = false;
      this.hasDetails = true;
    });
  },
  computed: {
    movieID() {
      return this.$route.params.id;
    },
    runtime() {
      var saat = 0;
      var dakika = 0;
      if (this.moviecik.runtime / 60 > 1) {
        saat = Math.floor(this.moviecik.runtime / 60);
        dakika = this.moviecik.runtime % 60;
      } else {
        dakika = this.moviecik.runtime;
      }

      return `${saat}h ${dakika}m `;
    },
    ticketPath(){
      return `/movie/${this.moviecik.id}/tickets`;
    }
  }
};
</script>

<template>
   
<section> 
    <loader v-if="isLoading"></loader>
    <div v-if="hasDetails">
        <backdrop-image :imageName=moviecik.backdrop_path></backdrop-image>
<div class="container pt-5">
  <div class="row">
       <div class="col-sm-4">
         <poster  :posterName=moviecik.poster_path></poster>
         </div>
 <div class="col-sm-8 details">
   <h2>{{moviecik.title}}</h2>
   <p>{{moviecik.overview}}</p>
   <div>Runtime : {{runtime}}</div>
   <div>Average Rating : {{moviecik.vote_average.toFixed(1)}}</div>
   <div>Production Company : {{moviecik.production_companies[0].name}}</div>
   <div>Release Date : {{moviecik.release_date}}</div>
   <br>
   <!-- <h4>Cast</h4> -->
   <a :href="ticketPath" class="btn btn-success">Get Tickets</a>
 </div>
  </div>
  </div> 
    </div>
</section>
    
</template>

<style>
.details {
  color: white;
  font-size: 14px;
}
</style>

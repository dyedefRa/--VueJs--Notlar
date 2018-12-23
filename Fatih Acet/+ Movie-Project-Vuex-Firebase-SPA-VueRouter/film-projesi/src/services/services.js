//Once services sonra store.
//Burada databaseden veri olaylarını yapıyorz.
//Orası dırek hazır halde burdakı alınan yapılan olayları topluyor

//Fire base işlerini burada yapacagız. Metodlara verileri atacagız ve bu verılerı store de toplayacagız.

export default {
    fetchMovies() {
        //firebaseden movie'leri çik
        return firebase.database().ref('/trendingMovies').once('value');
    },
//movie details için 01***
    fetchMovieDetails(id) {
      
return firebase.database().ref(`/movieDetails/${id}`).once('value');
    }

}
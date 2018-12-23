import service from '../services/services.js'

const state = {
    movies: [],
    //movie details için 02 -03***
    movieDetails: {}
};

const getters = {
    movies() {
        return state.movies;
    },
    //Gruplayıp listeleyecegim 3 erli card-desk bootsrapına uygun olarak
    groupMovies(state) {
        const grouped = [];
        state.movies.forEach((movie, index) => {
            //0 da diziye boş bir diiz ekledi ve 3. indise kadar bu diziye doldurdu.
            //sonra 3. indis oldu ve yıne bos bır dızı attı ve ardından 5 e akdar bu ıkıncı bos dızıye attı
            if (index % 3 === 0) {
                grouped.push([]);
            }
            grouped[grouped.length - 1].push(movie);
        });

        return grouped;


    }
};

//Datayı direk değiştirecek metodlar..
//ustekki atılan statenin movie si yan parametredeki movies olsun..
const mutations = {
    setMovies(state, movies) {
        state.movies = movies;
    },
    //movie details için 03***
    setMovieDetails(state, data) {

        const { movieID, movieData } = data;
        state.movieDetails[movieID] = movieData;
    }
};

//Vuex in içinde istek yapacak kısım.
const actions = {

    fetchMovies(context) {
        return service.fetchMovies().then((snapshot) => {
            context.commit('setMovies', snapshot.val())
        });
    },
    //movie details için 02***
    //servicedeki metodu kullandık
    //ve mutationa ihtiyacımız var setMovieDetails adında
    fetchMovieDetails(context, id) {
        return service.fetchMovieDetails(id).then((snapshot) => {
            context.commit('setMovieDetails', { movieID: id, movieData: snapshot.val() });
        })
    }
};

export default {
    state, getters, mutations, actions
}
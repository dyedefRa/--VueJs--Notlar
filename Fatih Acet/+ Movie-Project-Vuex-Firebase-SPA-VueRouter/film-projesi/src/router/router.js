import Home from '../components/Home.vue'
import MoviesDetails from '../components/MoviesDetails.vue'
export default {
    routes: [
        { path: '/', component: Home },
        { path: '/movie/:id', component: MoviesDetails }

    ],
    mode: 'history' //#'ı kaldırdı

}
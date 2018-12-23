import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

//USER Tablosunu atabılırısn
const state = {
    username: 'Baki',
    message: 'SELAM'
};
//Componentlerdeki computed propertilerin aynısı ?
const getters = {
    welcomeMessage(state) {
        return `${state.message}  ${state.username}`;

    }
};
//state degistirmek için bir mutationa ihtiyac var
//Konsept olarak mutationları tek basına kullanmıyoruz
//Her mutatıon mutlaka bır actıon tetıklemıs oluyor.
const mutations = {
    setUsername(state,name){
        state.username=name;
    }
};
const actions = {
    updateUsername({commit},name){
        commit("setUsername",name);
    }
};

const store = new Vuex.Store({
    state, getters, mutations, actions
})

export default store;
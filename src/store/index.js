import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex);

export default new Vuex.Store({

 plugins: [createPersistedState()],

 state: {
    name:''
 },
 mutations: {
      setName(state, payload) {
        state.name=payload
   }
 },
 actions: {},
getters: {
     userName: state => {
     return state.name
   }
 }
});
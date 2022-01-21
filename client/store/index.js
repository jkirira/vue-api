import Vue from 'vue'
import Vuex from 'vuex'
var jwt = require('jsonwebtoken');

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        token: null,
        loading: false,
        vehicles: []
    },

    getters: {
        isLoggedIn(state) {
            return !state.token;
        },
        saveToken(state, token){
            state.token = token;
        },
        isValid(state){
            return jwt.verify(state.token, state.password)
        },
        allUsers(state){
            return state.users;
        }
    },

    //SAVE TO THE DB WITH CONTXT

    mutations: {
        setToken(state, payload) {
            state.token = payload
        },

    },

    actions: {
        set_token (context, payload) {
            context.commit('setToken', payload)
        }
    }
})

export default store;
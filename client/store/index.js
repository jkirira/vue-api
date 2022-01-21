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
        isValid(state){
            return jwt.verify(state.token, state.password)
        },
        allUsers(state){
            return state.users;
        }
    },
    mutations: {
        signIn(state, user_token) {
            state.token = user_token
        },
        verifyToken(state, user){

        }
    },
    actions: {
            set_user (context) {
                context.commit(setToken)
            }
    }
})

export default store;
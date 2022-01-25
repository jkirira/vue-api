
import Vue from 'vue'
import VueRouter  from "vue-router";
import router  from './routes.js'
import store from "./store/index.js";
import App from  './app.vue'
import './assets/css/tailwind.scss';


Vue.use(VueRouter)

new Vue({
    el: '#app',

    router,

    store,

    render: h => h(App)

})
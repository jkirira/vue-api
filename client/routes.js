import Vue from 'vue'
import VueRouter from "vue-router";
import Home from "./views/Home.vue"
import Vehicles from "./views/Vehicles.vue"
import PostComponent from "./components/PostComponent.vue";
import GetComponent from "./components/GetComponent.vue";
import PutComponent from "./components/PutComponent.vue";
import DeleteComponent from "./components/DeleteComponent.vue";



const routes = [
    { path: '/', component: Home, name: 'home' },
    { path: '/login', component: Home, name: 'home' },
    {
        path: '/vehicles',
        component: Vehicles,
        name: 'vehicles',
        children : [
            {
                path: '/post/:id',
                component: PostComponent,
            },
            {
                path: '/get/:id',
                component: GetComponent,
            },
            {
                path: '/put/:id',
                component: PutComponent,
            },
            {
                path: '/delete/:id',
                component: DeleteComponent,
            },
        ]
    },
]


const router = new VueRouter({
    routes,
    mode: 'history'
})


export default router;
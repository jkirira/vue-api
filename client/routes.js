import Vue from 'vue'
import VueRouter from "vue-router";
import Home from "./views/Home.vue"
import Vehicles from "./views/Vehicles.vue"
import PostComponent from "./components/PostComponent.vue";
import GetComponent from "./components/GetComponent.vue";
import PutComponent from "./components/PutComponent.vue";
import DeleteComponent from "./components/DeleteComponent.vue";
import DisplayComponent from "./components/DisplayComponent.vue";
import LogInComponent from "./components/LogInComponent.vue";
import RegisterComponent from "./components/RegisterComponent.vue";



const routes = [
    { path: '/', component: LogInComponent, name: 'login' },
    { path: '/register', component: RegisterComponent, name: 'register' },
    { path: '/vehicles',  component: Vehicles,  name: 'vehicles'},

    { path: '/vehicles/post', component: PostComponent, name:'post',
        children: [{ path: '/:id', component: DisplayComponent, props: true}]
    },
    { path: '/vehicles/put', component: PutComponent, name:'put',
        children: [{ path: '/:id', component: DisplayComponent, props:true}]
    },
    { path: '/vehicles/delete', component: DeleteComponent, name:'delete',
        children: [{ path: '/:id', component: DisplayComponent, props: true}]
    },
    { path: '/vehicles/get', component: GetComponent, name:'get',
        children: [
            { path: '/:id', component: DisplayComponent, name: 'getId', props: true},
            // { path: '/all', component: DisplayComponent, props: true}
        ]
    },

]


const router = new VueRouter({
    routes,
    mode: 'history'
})


export default router;
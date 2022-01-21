<template>

  <div class="container">

    <div>
      <button @click="currentTab('home')">Home</button>
      <button @click="currentTab('login')">Login</button>
      <button @click="currentTab('register')">Register</button>
    </div>

  <component v-bind:is="getCurrentTab"></component>

</div>


</template>

<script>
  import LogInComponent from "../components/LogInComponent.vue";
  import RegisterComponent from "../components/RegisterComponent.vue";
  import { mapGetters } from "vuex";
  export default {

    name:'Home',
    components: {
      LogInComponent,
      RegisterComponent,
    },
    data(){
      return { currentTabComponent: 'home', }
    },

  computed:{
    getCurrentTab(){
      if(this.currentTabComponent == 'home'){
        return HomeComponent;
      }
      if(this.currentTabComponent == 'login'){
        return LogInComponent;
      }
      return RegisterComponent;
    },
    ...mapGetters(["isLoggedIn"]),
},
  methods: {
    currentTab(tab){
    this.currentTabComponent = tab
  }
}
}
</script>
<style scoped>
.container{
  height: 100%;
  font-size: 2rem;
}
.form-wrapper{
  border-radius: 5px;
}
.label-div > input{
  border-radius: 5px;
  border: 2px solid grey;
}
</style>

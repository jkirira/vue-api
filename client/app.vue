<template>
  <div id="app">

    <div class="bg-orange-500">

      <div class="top">
        <h1>Vue components</h1>
      </div>


      <div class="top" id="nav">
        <router-link to="/">Home</router-link>
        <router-link v-if="!isLoggedIn" to="/register">Sign Up</router-link>
        <router-link v-if="isLoggedIn" :to="{name: 'vehicles'}">Vehicles</router-link>
        <router-link v-if="isLoggedIn" :to="{name: 'logout'}">Logout</router-link>

      </div>

    </div>

    <router-view></router-view>

  </div>
</template>

<script>
const axios = require('axios');

export default {
  name: 'App',

  data(){
    return {
      isLoggedIn: this.$store.getters.isLoggedIn
    }
  },

  methods: {
    fetchData(){
      axios.get('http://localhost:4000/api/vehicles')
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          })
    },

    saveData(){
      axios.post('http://localhost:4000/api/vehicles', {
        name: 'Mitsubishi',
        color: 'Yellow',
        wheels: 4,
        capacity: 4
        }).then(function (response) {
              console.log(response);
        }).catch(function (error) {
              console.log(error);
        });
    }
  }
}
</script>

<style>
html, body{
  font-size: 16px;
  margin: 0;
  padding: 0;
  height: 100vh;
  overflow-y: scroll;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
.header{
  background: #34495E;
  color: white;
  height:30%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
#nav{
  color: white;
  text-decoration: none;
}

#nav >a {
  color: #41B883;
  background: #ffffff;
  margin-left: 10px;
  text-decoration: none;
  padding: 10px;
  border-radius: 5px;
}

#nav > .router-link-exact-active{
  color: white;
  background: #41B883;
}

.top{
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px 0;
  font-size: 1.4rem;
}
.grid-wrapper{
  display: grid;
  grid-template-columns: repeat(2, minmax(250px, 1fr));
  grid-gap: 10px;
  box-sizing: border-box;
  padding: 0 10px;
  margin-top: 10px;
}
.form-wrapper{
  box-sizing: border-box;
  margin: 20px 10px 10px;
  border: 2px solid grey;
  border-radius: 5px;
  padding-bottom: 20px;
}

@media screen and (min-width: 350px) {
  .container{
    font-size: 1.5rem;
  }

}

@media screen and (min-width: 750px){
  .container{
    font-size: 2rem;
    box-sizing: border-box;
    padding: 0px 10%;
  }
  .task, form{
    padding: 25px;
  }
}

@media screen and (min-width: 1024px){
  .container{
    font-size: 2rem;
    box-sizing: border-box;
    padding: 0px 10%;
  }
  button{
    font-size: 1.4rem;
  }
}
</style>

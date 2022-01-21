<template>
  <div id="app">

    <div class="header">
      <h1>Vue components</h1>

      <div id="nav">
<!--        <router-link to="/">Home</router-link>-->
        <router-link v-if="isLoggedIn" to="/tasks">Vehicles</router-link>
      </div>

    </div>

    <router-view></router-view>

  </div>
</template>

<script>
const axios = require('axios');

export default {
  name: 'App',
  computed: {
    isLoggedIn(){
      return this.$store.state.isLoggedIn;
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
      })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
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
  height: 100%;
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
  color: white;
  margin-left: 10px;
  background: #41B883;
  text-decoration: none;
  padding: 10px;
  border-radius: 5px;
}

#nav > .router-link-exact-active{
  color: #41B883;
  background: #ffffff;
}

.container{
  box-sizing: border-box;
  grid-gap: 20px;
  padding: 10px;
  font-size: 1.4rem;
}
.center, .right{
  width: 100%;

  border-radius: 5px;
  padding: 20px 10px;
  box-sizing: border-box;

}
.center{
  grid-column: 2;

  box-sizing: border-box;
}
.add-task-div{
  grid-row: 1;
  /* border: 2px solid grey; */
}
.tasks-div{
  grid-row: 2;
  /* border: 2px solid grey; */
  margin-bottom: 20px;

}
.right{
  grid-column: 1;
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

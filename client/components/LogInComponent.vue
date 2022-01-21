<template>
  <div class="form-wrapper">

    <form v-if="!isLoggedIn">

      <h2>Login</h2>

      <div class="form-entry">
        <div class="label-div">
          <label for="username">UserName</label>
        </div>
        <div class="label-div">
          <input type="text" id="username" v-model="form.username" >
        </div>
      </div>

      <div class="form-entry">
        <div class="label-div">
          <label for="password">Password</label>
        </div>
        <div class="label-div">
          <input type="password" id="password" v-model="form.password">
        </div>
      </div>

    </form>

    <div v-if="!isLoggedIn" class="form-entry">
      <custom-button info="Sign In" v-on:customClick="loginUser" ></custom-button>
    </div>

    <div v-if="isLoggedIn" class = "wrapper">
      Home Page
    </div>

  </div>
</template>

<script>
import CustomButton from './CustomButton.vue'
import axios from 'axios'

export default {
  name: "LogInComponent",
  components: {
    CustomButton,
  },

  data(){
    return {
      form: {},
      error_message: null,
      isLoggedIn: this.$store.getters.isLoggedIn
    }
  },

  methods: {

    validate(){
      if(this.form.username.length == '' || this.form.password == '' ) {
        this.error_message = 'Please fill all values'
        return false;
      }
      return true;
    },

    loginUser(){
      this.error_message = null
      if (!this.validate()) {
        return;
      }

      axios.post('http://localhost:4000/login',{username: this.form.username, password: this.form.password})
        .then((response) => {
          this.$store.dispatch('set_token', response.data.token);
          console.log(response.data)
          this.$router.push('/vehicles')
        })
        .catch((err) => {
          console.log('login error', err)
          this.error_message = err
        })

    }
  }
}
</script>

<style scoped>
form{
  padding: 10px 0px;
  box-sizing: border-box;
}
.form-wrapper{
  border: 2px solid grey;
  box-sizing: border-box;
  margin-top: 20px;
}
.form-entry{
  text-align: left;
  box-sizing: border-box;
  padding: 10px 15% 10px;
}
input, textarea{
  font-size: 1.3rem;
  width: 100%;
  box-sizing: border-box;
  border: 2px solid grey;
  border-radius: 5px;
  padding: 5px;
}
input:focus, :hover{
  outline: #41B883;
}
button{
  width: 50%;
  border-radius: 5px;
  margin: auto;
}
.task-buttons{
  grid-template-columns: none;
}

#reminder{
  accent-color: #41B883;
  color: white;
  margin-right: 10px;
  width: unset;
}
</style>
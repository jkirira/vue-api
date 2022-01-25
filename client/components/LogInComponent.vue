<script src="../../server/public/controllers/vehicle_controller.js"></script>
<template>
  <div class="form-wrapper">
    <h2>Login</h2>

    <div v-if="error_message" class="form-entry error">{{ error_message }}</div>

    <form v-if="!isLoggedIn">

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
      <custom-button info="Sign In" @customClick="loginUser" ></custom-button>
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
      if( !this.form.username || !this.form.password) {
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
          localStorage.setItem('login_details', JSON.stringify(response.data.token))
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

.form-entry{
  text-align: left;
  box-sizing: border-box;
  padding: 10px 15% 10px;
}
.wrapper{
  box-sizing: border-box;
  padding: 20px;
  font-size: 1.5rem;
  margin-top: 50px;
}
.error{
  border: 2px solid red;
  border-radius: 5px;
  color: red;
  margin: 0 15%;
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
<template>
  <div class="form-wrapper">
    <div>

      <div v-if="error_message" class="form-entry">{{ error_message }}</div>
    </div>

      <form>
        <h2>Register</h2>
      <div class="form-entry">
        <div class="label-div">
          <label for="username">UserName</label>
        </div>
        <div class="label-div">
          <input type="text" id="username" v-model="local_username" class="border-gray-500" >
        </div>
      </div>

      <div class="form-entry">
        <div class="label-div">
          <label for="password">Password</label>
        </div>
        <div class="label-div">
          <input type="password" id="password" v-model="local_password" >
        </div>
      </div>

    </form>

    <div class="form-entry">
      <custom-button info="Register" @customClick="registerUser" ></custom-button>
    </div>

  </div>
</template>

<script>
import CustomButton from './CustomButton.vue'
import axios from 'axios';

export default {
  name: "RegisterComponent",
  components: {
    CustomButton,
  },
  data(){
    return {
      local_username: '',
      local_password: '',
      error_message: null
    }
  },
  methods: {
    validate(){
      if(this.local_username.length == '' || this.local_password == '' ) {
        this.error_message = 'Please fill all values'
        return false
      }
      return true;
    },

    registerUser(){
      this.error_message = null
      if ( !this.validate() ) {
        return;
      }

      axios.post('http://localhost:4000/signup',{username: this.local_username, password: this.local_password})
          .then((response) => {
            console.log(response.data)
            this.error_message(response.data.success)
          })
          .catch((err) => {
            console.log('signup error', err)
            this.error_message(err)
          }).then(() => {
            this.$router.push('/vehicles')
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
.task-buttons{
  grid-template-columns: none;
}

button{
  width: 50%;
  border-radius: 5px;
  margin: auto;
}
#reminder{
  accent-color: #41B883;
  color: white;
  margin-right: 10px;
  width: unset;
}
</style>
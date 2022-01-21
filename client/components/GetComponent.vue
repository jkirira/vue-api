<template>
  <div class="form-wrapper">

    <div v-if="error_message" class="form-entry">{{ error_message }}</div>

    <form>

      <div class="form-entry">
        <div class="label-div">
          <custom-button class="custom-button" info="/" v-on:customClick="fetchAllVehicles" ></custom-button>
        </div>
        <div class ="label-div">
          /vehicles/api/get/  -   Returns all vehicles
        </div>
      </div>

      <div class="form-entry">
        <div class="label-div">
          <custom-button class="custom-button" info="/:id" v-on:customClick="fetchVehicle" ></custom-button><input type="text" id="vehicleid" v-model="form.vehicleId" >
        </div>
        <div class ="label-div">
          /vehicles/api/get/:id  -   Matches vehicle id
        </div>
      </div>

      <div class="form-entry">
        <div class="label-div">
          <custom-button class="custom-button" info="/name" v-on:customClick="fetchVehicleName" ></custom-button><input type="text" id="vehicleName" v-model="form.vehicleName" >
        </div>
        <div class ="label-div">
          /vehicles/api/get/name=?  -  Matches vehicle name
        </div>
      </div>

      <div class="form-entry">
        <div class="label-div">
          <custom-button class="custom-button" info="/color" v-on:customClick="fetchVehicleColor" ></custom-button><input type="text" id="vehicleColor" v-model="form.vehicleColor" >
        </div>
        <div class ="label-div">
          /vehicles/api/get/name=?  -  Matches vehicle color
        </div>
      </div>

    </form>

    <div>
      <router-view></router-view>
    </div>

  </div>
</template>
<script>
import CustomButton from './CustomButton.vue'
import axios from 'axios'

export default {
  name: "GetComponent",
  components: {
    CustomButton
  },
  data(){
    return {
      form: {},
      error_message: null
    }
  },
  methods: {

    fetchVehicle() {
      if (!this.form.vehicleId) {
        this.error_message = "Empty values"
        return;
      }

      this.error_message = null

      let URL = "http://localhost:4000/api/vehicles/" + this.form.vehicleId

      axios.get(URL)
          .then((response)=> {
            console.log(response)
            this.$router.push({name: 'getId', params: { vehicles: response.data } })
          }).catch((err) => {
            console.log(err)
          })

      // this.$router.push('/vehicles/:id')
    },

    fetchAllVehicles() {

      this.error_message = null

      URL = "http://localhost:4000/api/vehicles/"

      axios.get(URL)
          .then((response)=> {
            console.log(response)
            this.$router.push({name: 'getId', params: { vehicles: response.data } })
          }).catch((err) => {
            console.log(err)
          })

      // this.$router.push('/vehicles/:id')
    },

    fetchVehicleName() {
      if (!this.form.vehicleName) {
        this.error_message = "Empty values"
        return;
      }
      this.error_message = null

      let URL = "http://localhost:4000/api/vehicles/search/name=" + this.form.vehicleName

      axios.get(URL)
          .then((response)=> {
            console.log(response)
            this.$router.push({name: 'getId', params: { vehicles: response.data } })
          }).catch((err) => {
            console.log(err)
          })

      // this.$router.push('/vehicles/:id')
    },

    fetchVehicleColor() {
      if (!this.form.vehicleColor) {
        this.error_message = "Empty values"
        return;
      }
      this.error_message = null

      let URL = "http://localhost:4000/api/vehicles/search/color=" + this.form.vehicleColor

      axios.get(URL)
          .then((response)=> {
            console.log(response)
            this.$router.push({name: 'getId', params: { vehicles: response.data } })
          }).catch((err) => {
            console.log(err)
          })

      // this.$router.push('/vehicles/:id')
    },



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
.label-div{
  display: flex;
  box-sizing: border-box;
  font-size: 1.5rem;
}
input, textarea{
  font-size: 1.3rem;
  width: 100%;
  box-sizing: border-box;
  border: 2px solid black;
  padding: 5px;
  border-radius: 5px;
}
.custom-button{
  margin-right: 10px;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 10px;
  width: 15%;
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
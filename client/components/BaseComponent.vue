<template>
  <div class="main">

    <div v-if="display_message" class="form-entry" :class="message_type">{{ display_message }}</div>

    <div class="grid-wrapper">

      <div class="form-wrapper">

    <form>

      <div class="form-entry">
        <div class="label-div">
          <custom-button class="custom-button" info="/" v-on:customClick="fetchAllVehicles" ></custom-button>
        </div>
        <div class ="label-div">
          /api/vehicles/get/  -   Returns all vehicles
        </div>
      </div>

      <div class="form-entry">
        <div class="label-div">
          <custom-button class="custom-button" info="/:id" v-on:customClick="fetchVehicle" ></custom-button><input type="text" id="vehicleid" v-model="form.vehicleId" >
        </div>
        <div class ="label-div">
          /api/vehicles/get/:id  -   Matches vehicle id
        </div>
      </div>

      <div class="form-entry">
        <div class="label-div">
          <custom-button class="custom-button" info="/name" v-on:customClick="fetchVehicleName" ></custom-button><input type="text" id="vehicleName" v-model="form.vehicleName" >
        </div>
        <div class ="label-div">
          /api/vehicles/get/name=?  -  Matches vehicle name
        </div>
      </div>

      <div class="form-entry">
        <div class="label-div">
          <custom-button class="custom-button" info="/color" v-on:customClick="fetchVehicleColor" ></custom-button><input type="text" id="vehicleColor" v-model="form.vehicleColor" >
        </div>
        <div class ="label-div">
          /api/vehicles/get/color=?  -  Matches vehicle color
        </div>
      </div>

    </form>

  </div>

      <div class="output">
        <div><b>Output {{query}}</b></div>
        <div class="output-wrapper" v-if="getVehicles">

          <p v-if="getVehicles.data">{{ getVehicles.data }}</p>

          <div v-else v-for="(vehicle, index) in getVehicles" :key="index" class="vehicle">
              <p><b>Id:</b>&nbsp{{ vehicle.id }}</p>
              <p><b>Name:</b>&nbsp{{ vehicle.name }}</p>
              <p><b>Color:</b>&nbsp{{ vehicle.color }}</p>
              <p><b>Wheels:</b>&nbsp{{ vehicle.wheels }}</p>
              <p><b>Capacity:</b>&nbsp{{ vehicle.capacity }}</p>
          </div>

        </div>
      </div>

    </div>

  </div>
</template>
<script>
import CustomButton from './CustomButton.vue'
import axios from 'axios'
import {mapGetters} from "vuex";

export default {
  name: "GetComponent",
  components: {
    CustomButton
  },
  data(){
    return {
      form: {},
      display_message: null,
      message_type: '',
      query: ''
    }
  },
  computed:{
    ...mapGetters(['getVehicles'])
  },
  methods: {

    fetchVehicle() {
      if (!this.form.vehicleId) {
        this.display_message = "Cannot send Empty values"
        this.message_type = "error"
        return;
      }

      this.display_message = null

      let URL = "http://localhost:4000/api/vehicles/" + this.form.vehicleId

      axios.get(URL)
          .then((response)=> {
            this.$store.dispatch('clear_vehicles')
            this.$store.dispatch('save_vehicles', response.data)
          }).catch((err) => {
            this.$store.dispatch('clear_vehicles')
            this.$store.dispatch('save_vehicles', err.response)
          }).then(()=>{
            this.query = 'Id: ' + this.form.vehicleId
          })
    },


    fetchAllVehicles() {

      this.display_message = null

      URL = "http://localhost:4000/api/vehicles/"

      axios.get(URL)
          .then((response)=> {
            this.$store.dispatch('clear_vehicles')
            this.$store.dispatch('save_vehicles', response.data)
          }).catch((err) => {
            this.$store.dispatch('clear_vehicles')
            this.$store.dispatch('save_vehicles', err.response)
          }).then(()=>{
            this.query = '/ '
          })
    },


    fetchVehicleName() {
      if (!this.form.vehicleName) {
        this.display_message = "Cannot send Empty values"
        this.message_type = "error"
        return;
      }
      this.display_message = null

      let URL = "http://localhost:4000/api/vehicles/search/name=" + this.form.vehicleName

      axios.get(URL)
          .then((response)=> {
            this.$store.dispatch('clear_vehicles')
            this.$store.dispatch('save_vehicles', response.data)
          }).catch((err) => {
            this.$store.dispatch('clear_vehicles')
            this.$store.dispatch('save_vehicles', err.response)
          }).then(()=>{
            this.query = 'Name: ' + this.form.vehicleName
          })
    },


    fetchVehicleColor() {
      if (!this.form.vehicleColor) {
        this.display_message = "Cannot send Empty values"
        this.message_type = "error"
        return;
      }
      this.display_message = null

      let URL = 'http://localhost:4000/api/vehicles/search/color=' + this.form.vehicleColor

      axios.get(URL)
          .then((response)=> {
            this.$store.dispatch('clear_vehicles')
            this.$store.dispatch('save_vehicles', response.data)
          }).catch((err) => {
            this.$store.dispatch('clear_vehicles')
            this.$store.dispatch('save_vehicles', err.response)
          }).then(()=>{
            this.query = 'Color: ' + this.form.vehicleColor
          })
    },

  }
}
</script>

<style scoped>
form{
  padding: 10px 0px;
  box-sizing: border-box;
}
.form-wrapper, .output{
  border: 2px solid grey;
  box-sizing: border-box;

  margin-top: 20px;
  margin-left: 5px;
}
.error{
  border: 2px solid red;
  border-radius: 5px;
  color: red;
  margin: 0 15%;
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
  margin: 10px 0;
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
.grid-wrapper{
  display: grid;
  grid-template-columns: repeat(2, minmax(250px, 1fr));
  grid-gap: 10px;
}
.output{
  border: 2px solid green;
  box-sizing: border-box;
  padding-top: 10px;
  overflow: scroll;
  max-height: 650px;
}
.output-wrapper{
}

.vehicle{
border: 2px solid black;
  margin: 10px;
  box-sizing: border-box;
  padding: 20px;
  text-align: left;
  border-radius: 10px;
}
</style>
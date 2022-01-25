<template>
  <div class="main">

    <div v-if="display_message" class="message-div" :class="message_type">{{ display_message }}</div>

    <div class="grid-wrapper">

      <div class="form-wrapper">
        <form>
          <div class="form-entry">
            <div class="label-div">
              <label for="name">Name</label>
            </div>
            <div class="label-div">
              <input type="text" id="name" v-model="form.name" >
            </div>
          </div>

          <div class="form-entry">
            <div class="label-div">
              <label for="wheels">Wheels</label>
            </div>
            <div class="label-div">
              <input type="text" id="wheels" v-model="form.wheels" >
            </div>
          </div>

          <div class="form-entry">
            <div class="label-div">
              <label for="color">Color: </label>
            </div>
            <div class="label-div">
              <input type="text" id="color" v-model="form.color" >
            </div>
          </div>


          <div class="form-entry">
            <div class="label-div">
              <label for="capacity">Capacity: </label>
            </div>
            <div class="label-div">
              <input type="text" id="capacity" v-model="form.capacity" >
            </div>
          </div>

        </form>

        <div class="button-div">
          <custom-button info="Add Task" v-on:customClick="addVehicle" ></custom-button>
        </div>

      </div>

      <div class="output">
        <div><b>Output</b></div>
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
import CustomButton from "./CustomButton.vue";
import axios from "axios";
import {mapGetters} from "vuex";
export default {
  name: "PostComponent",

  components: {
    CustomButton
  },

  data(){
    return{
      form: {},
      display_message: null,
      message_type: '',
    }
  },

  computed:{
    ...mapGetters(['getVehicles'])
  },

  methods: {
    validate(){
      if( this.form.name && this.form.wheels && this.form.color && this.form.capacity){
        return true
      } else {
        return false
      }
    },

    addVehicle() {
      if (!this.validate()) {
        this.display_message = "Cannot send Empty values"
        this.message_type = "error"
        return;
      }

      this.display_message = null

      let URL = "http://localhost:4000/api/vehicles/"

      axios.post(URL, {'name': this.form.name, 'wheels': this.form.wheels, 'color': this.form.color, 'capacity': this.form.capacity })
          .then((response)=> {
            console.log(response)
            this.$store.dispatch('clear_vehicles')
            this.$store.dispatch('save_vehicles', response.data)
          }).catch((err) => {
            this.$store.dispatch('clear_vehicles')
            this.$store.dispatch('save_vehicles', err.response)
          })
    },

  }

}
</script>

<style scoped>
.form-wrapper{
  box-sizing: border-box;
  padding: 0 15%;
}
.form-entry {
  display: grid;
  margin-bottom: 10px;
  font-size: 1.4rem;
  grid-template-columns: 20% 1fr;
}
.label-div{
  display: flex;
  justify-content: flex-start;
}
.label-div >input{
  border: 2px solid grey;
  border-radius: 5px;
  margin-left: 30px;
}
.error{
   border: 2px solid red;
   border-radius: 5px;
   color: red;
   margin: 0 15%;
 }
.message-div{
  text-align: left;
  box-sizing: border-box;
  padding: 10px 15% 10px 10px;
}
.button-div{
  display: flex;
  box-sizing: border-box;
  justify-content: flex-start;
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
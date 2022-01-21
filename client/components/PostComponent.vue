<template>
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
          <label for="color">Capacity: </label>
        </div>
        <div class="label-div">
          <input type="text" id="capacity" v-model="form.capacity" >
        </div>
      </div>

    </form>

    <div class="form-entry">
      <custom-button info="Add Task" v-on:customClick="addVehicle" ></custom-button>
    </div>

    <router-view></router-view>

  </div>
</template>

<script>
import CustomButton from "./CustomButton.vue";
import axios from "axios";
export default {
  name: "PostComponent",
  components: {
    CustomButton
  },
  data(){
    return{
      form: {}
    }
  },

  methods: {
    validate(){
      if( this.form.name != '' || this.form.wheels !='' || this.form.color !='' || this.form.capacity !=''){
        return false
      }
      return true
    },

    addVehicle() {
      if (!this.validate()) {
        this.error_message = "Empty values"
        return;
      }

      this.error_message = null

      let URL = "http://localhost:4000/api/vehicles/"

      axios.post(URL, {'name': this.form.name, 'wheels': this.form.wheels, 'color': this.form.color, 'capacity': this.form.capacity })
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
.form-wrapper{
  box-sizing: border-box;
  padding: 0 15%;
}
.form-entry {
  display: grid;
  margin-bottom: 10px;
  font-size: 1.4rem;
  grid-template-columns: 10% 1fr;
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
</style>
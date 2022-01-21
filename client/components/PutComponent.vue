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
          <label for="capacity">Capacity: </label>
        </div>
        <div class="label-div">
          <input type="text" id="capacity" v-model="form.capacity" >
        </div>
      </div>

    </form>

    <div class="form-entry">
      <custom-button info="Add Task" v-on:customClick="emitAddTask" ></custom-button>
    </div>

    <router-view></router-view>

  </div>
</template>

<script>
import CustomButton from "./CustomButton.vue";
export default {
  name: "PutComponent",
  components: {
    CustomButton
  },
  data(){
    return{
      form: {}
    }
  }
}
</script>

<style scoped>
.form-wrapper{
  box-sizing: border-box;
  padding: 0 15%;
}
.form-entry{
  display: flex;
}
.form-entry >input{
  border: 2px solid grey;
  border-radius: 5px;
}
</style>
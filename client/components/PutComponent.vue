<template>
  <div class="form-wrapper">
    <form>

      <div class="form-entry">
        <div class="label-div">
          <label for="name">Name</label>
        </div>
        <div class="label-div">
          <input type="text" id="name" v-model="local_name" >
        </div>
      </div>

      <div class="form-entry">
        <div class="label-div">
          <label for="wheels">Wheels</label>
        </div>
        <div class="label-div">
          <input type="text" id="wheels" v-model="local_wheels" >
        </div>
      </div>

      <div class="form-entry">
        <div class="label-div">
          <label for="color">Color: </label>
        </div>
        <div class="label-div">
          <input type="text" id="color" v-model="local_color" >
        </div>
      </div>


      <div class="form-entry">
        <div class="label-div">
          <label for="capacity">Capacity: </label>
        </div>
        <div class="label-div">
          <input type="text" id="capacity" v-model="local_capacity" >
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
      local_name: '',
      local_color: '',
      local_wheels: '',
      local_capacity: '',
    }
  }
}
</script>

<style scoped>

</style>
<template>
  <div class="form-wrapper">

    <form>

      <div class="form-entry">
        <div class="label-div">
          <span class="left-marker">/</span><input type="text" id="vehicleId" v-model="local_vehicleId" ><custom-button info="Sign In" v-on:customClick="fetchApi" ></custom-button>
        </div>
      </div>

    </form>

    <router-view></router-view>

  </div>
</template>

<script>
import CustomButton from "./CustomButton.vue";
export default {
  name: "DeleteComponent",
  components: {
    CustomButton
  },
  data(){
    return{
      local_vehicleId: '',
    }
  }
}
</script>

<style scoped>

</style>
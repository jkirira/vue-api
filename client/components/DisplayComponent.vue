<template>

  <div>

    <div v-for="(vehicle, index) in objs" >
      <p>vehicle.name</p>
      <p>vehicle.name</p>
      <p>vehicle.name</p>
    </div>

  </div>

</template>

/*//////////////////////////*/
<script>
// import VehicleComponent from './Components/VehicleComponent.vue'

export default {
  name: 'DisplayComponent',

  props : ['objs'],

  components: {
    // VehicleComponent
  }

}

</script>


<style>

</style>
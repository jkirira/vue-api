<template>

  <div class="container">

    <div v-if="isLoggedIn" class="links">
      <RouterLink to="/vehicles/get">Get</RouterLink>
      <RouterLink to="/vehicles/post">Post</RouterLink>
      <RouterLink to="/vehicles/put">Put</RouterLink>
      <RouterLink to="/vehicles/delete">Delete</RouterLink>
    </div>


  </div>


</template>

<script>


export default {
  name:'Vehicles',
  components: {},
  data(){
    return {
      isLoggedIn : this.$store.getters.isLoggedIn
    }

  },

  created() {},

  computed:{},
  methods: {},

}


</script>

<style scoped>
.container{
  height: 100%
}
.links{
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: flex-start;
  padding: 0 15%;
}
.links > a{
  padding: 20px;
  box-sizing: border-box;
  background: #34495E;
  color: #ffffff;
  flex-shrink: initial;
  text-align: left;
  margin-top: 10px;
}
</style>

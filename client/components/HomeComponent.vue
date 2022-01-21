
<template>

  <div class="container">
    <div class = "wrapper">
      Home Page
    </div>
  </div>

</template>

<script>

export default {
  name: 'HomeComponent',
  components: {},
  data() {
    return {}
  },

}
</script>

<style scoped>

.container{
  box-sizing: border-box;
  grid-gap: 20px;
  padding: 10px;
  height: 100%;
}

.wrapper{
  font-size: 1.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid grey;
  box-sizing: border-box;
  height: 50%;
  padding: 0 25%;
  margin: 10% 10%;
  border-radius: 10px;
}
button{
  width: 50%;
  border-radius: 5px;
  margin: auto;
}

.red-outline{
  border: 2px solid red;
}

.green-outline{
  border: 3px solid lime;
}

@media screen and (min-width: 350px) {
  .container{
    font-size: 1.5rem;
  }

}

@media screen and (min-width: 750px){
  .container{
    font-size: 2rem;
    box-sizing: border-box;
    padding: 0px 10%;
  }
  .task, form{
    padding: 25px;
  }
}

@media screen and (min-width: 1024px){
  .container{
    font-size: 2rem;
    box-sizing: border-box;
    padding: 0px 10%;
  }
  button{
    font-size: 1.4rem;
  }
}
</style>

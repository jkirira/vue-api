<template>
  <div>{{ msg }}</div>
</template>

<script>
export default {
  name: 'TestMe',
  props: ['msg'],

  data() {
    return {
      msg: 'Hello Vue Test Utils'
    }
  }

}
</script>

<style></style>
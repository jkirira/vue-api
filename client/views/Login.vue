<template>
  <div>
    <h1>LOGIN</h1>
    <form @submit.prevent="login">
      <input v-model="username" placeholder="username" />
      <input v-model="password" placeholder="password" type="password" />
      <button type="submit">Login</button>
    </form>
  </div>
</template>
<script>
// import store from "../store";
import {mapMutations} from 'vuex'
export default {
  name: "Login"
  data: () => {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    ...mapMutations(["setUser", "setToken"]),

    this.$store.state.users.find((user) => {
      return user.username == username;
    }),

    async login(e) {
      e.preventDefault();
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: this.username,
          password: this.password,
        }),
      });
      const { user, token } = await response.json();
      this.setUser(user);
      this.setToken(token);
    },
  },
};
</script>
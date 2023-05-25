<script>
import axios from "axios";

export default {
  props: ['showModal'],
  methods: {
    closeModal() {
      this.$parent.showModal();
    },
    login() {
      axios.post('http://127.0.0.1:8000/api/login',
        {
          email: this.email,
          password: this.password
        }
      )
        .then((response) => {
          this.$store.commit("changeToken", response.data.api_token)          
          this.$router.push({
            path: '/dashboard'
          })
        })
        .catch((error) => console.log(error))
    }
  }
}
</script>

<template>
  <div class="modal-background"></div>
  <div class="modal-content">
    <div class="box px-6">
      <h2 class="my-4 has-text-centered is-size-3">Login</h2>
      <form @submit.prevent="login">
        <div class="field">
          <label class="label">Email</label>
          <div class="control">
            <input class="input" type="email" v-model="email">
          </div>
        </div>
        <div class="field">
          <label class="label">Password</label>
          <div class="control">
            <input class="input" type="password" v-model="password">
          </div>
        </div>
        <div class="field mt-5 is-grouped is-grouped-centered">
          <div class="control">
            <button type="submit" class="button is-info px-6">Sign in</button>
          </div>
        </div>
      </form>
      <div>New account? <router-link to="/ownercreate">Sign up</router-link></div>
    </div>
  </div>
  <button class="modal-close is-large" aria-label="close" @click='closeModal'></button>
</template>

<style scoped></style>

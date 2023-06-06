<script>
import { instance } from "../services";

export default {
  props: ['showModal'],
  data() {
    return {
      error: []
    }
  },
  methods: {
    closeModal() {
      this.$parent.showModal();
    },
    login() {
      instance.post('login',
        {
          email: this.email,
          password: this.password
        }
      )
        .then((response) => {
          this.$store.commit("changeToken", response.data.api_token)
          instance.defaults.headers.common['Authorization'] = `Bearer ${this.$store.state.token}`
          this.$router.push({
            path: '/dashboard'
          })
        })
        .catch((error) => {
          this.error = []
          this.error = error.response.data
          console.log(error.response.data)
        })
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
          <p class="control has-icons-left">
            <input class="input" :class="[(error?.email?.[0] || error?.message) ? 'is-danger' : '']" type="email" placeholder="Email"
              v-model="email">
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
          </p>
          <p class="help is-danger">{{ error?.email?.[0] }}</p>
        </div>
        <div class="field">
          <p class="control has-icons-left">
            <input class="input" :class="[(error?.password?.[0] || error?.message) ? 'is-danger' : '']" type="password" placeholder="Password"
              v-model="password">
            <span class="icon is-small is-left">
              <i class="fas fa-lock"></i>
            </span>
          </p>
          <p class="help is-danger">{{ error?.password?.[0] }}</p>
          <p class="help is-danger">{{ error?.message }}</p>
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

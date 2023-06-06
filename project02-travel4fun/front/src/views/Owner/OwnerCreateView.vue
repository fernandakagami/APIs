<script>
import { instance } from '../../services';

export default {
  data() {
    return {
      error: []      
    }
  },
  methods: {
    register() {
      instance.post('user',
        {
          name: this.name,
          email: this.email,
          password: this.password,
          password_confirmation: this.confirmationPassword,
          role: "owner"
        }
      )
        .then((response) => {          
          this.$store.state.notification = 'User created successfully'
          this.$store.state.show = true
          this.$store.state.toastClass = 'is-success'
          this.$router.push({
            path: '/owner'
          })
        })
        .catch((response) => {          
          this.error = []
          this.error = response.response.data
        })
    }
  },
}
</script>

<template>
  <header>
    <div class="container is-max-desktop">
      <img src="../../assets/logo.png" alt="logo" class="logo" />
    </div>
  </header>
  <div class="container is-max-desktop">
    <form class="section is-medium" @submit.prevent="register">
      <router-link class="button is-light mb-2" to="/owner">Return</router-link>
      <h1 class="has-text-centered is-size-4 has-text-weight-bold mb-3">Owner Register</h1>
      <div class="field">
        <p class="control has-icons-left">
          <input class="input" :class="[error?.name?.[0] ? 'is-danger' : '']" type="text" placeholder="Name" v-model="name">
          <span class="icon is-small is-left">
            <i class="fas fa-user"></i>
          </span>
        </p>
        <p class="help is-danger">{{ error?.name?.[0] }}</p>
      </div>
      <div class="field">
        <p class="control has-icons-left">
          <input class="input" :class="[error?.email?.[0] ? 'is-danger' : '']" type="email" placeholder="Email" v-model="email">
          <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
          </span>
        </p>
        <p class="help is-danger">{{ error?.email?.[0] }}</p>
      </div>
      <div class="field-body">
        <div class="field">
          <p class="control has-icons-left">
            <input class="input" :class="[error?.password?.[0] ? 'is-danger' : '']" type="password" placeholder="Password" v-model="password">
            <span class="icon is-small is-left">
              <i class="fas fa-lock"></i>
            </span>
          </p>
          <p class="help is-danger">{{ error?.password?.[0] }}</p>
        </div>
        <div class="field">
          <p class="control has-icons-left">
            <input class="input" :class="[error?.password_confirmation?.[0] ? 'is-danger' : '']" type="password" placeholder="Confirmation password" v-model="confirmationPassword">
            <span class="icon is-small is-left">
              <i class="fas fa-lock"></i>
            </span>
          </p>
          <p class="help is-danger">{{ error?.password_confirmation?.[0] }}</p>
        </div>        
      </div>
      <div class="field mt-5 is-grouped is-grouped-centered">
        <div class="control">
          <button type="submit" class="button is-info px-6">Register</button>
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped>
header {
  background-color: #003b95;
}

header img {
  width: 100px;
}
</style>

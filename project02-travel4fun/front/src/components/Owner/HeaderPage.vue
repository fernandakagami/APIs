<script>
import axios from 'axios';

export default {
  methods: {
    logout() {
      axios
        .post(
          'http://127.0.0.1:8000/api/logout',
          { api_token: localStorage.token },
          {
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              Authorization: "Bearer " + localStorage.token
            }
          })
        .then((response) => {
          console.log(response)
          localStorage.token = '';
          this.$router.push({
            path: '/owner'
          })
        })
        .catch((error) => console.log(error))
    }
  }
}
</script>

<template>
  <header>
    <div class="container is-max-desktop">
      <div class="is-flex is-justify-content-space-between is-align-items-center header-content">
        <div>
          <img src="../../assets/logo.png" alt="logo" class="logo" />
        </div>
        <div class="is-flex is-justify-content-flex-end is-align-items-center">
          <button class="login-button" @click="logout">
            <span class="icon is-small">
              <i class="fas fa-user"></i>
            </span>
            Logout
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
    background-color: #003b95;
}

.header-content {
    height: 100px;
}

.logo {
    width: 100px;
}

.login-title {
    color: white;
    margin-right: 20px;
}

.login-button {
    color: white;
    border: 1px solid white;
    padding: 3px 30px 5px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
}
</style>

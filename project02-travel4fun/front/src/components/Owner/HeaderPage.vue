<script>
import Message from '../../components/Message.vue';
import { useApi } from "../../services";

export default {
  components: {
    Message
  },  
  methods: {
    logout() {      
      useApi().post('logout')
        .then(() => {          
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
      <Message v-show="this.$store.state.show" :message="this.$store.state.notification" :class="this.$store.state.toastClass"></Message>
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

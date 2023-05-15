<script type="module">
import LoginModal from '../components/LoginModal.vue';

export default {
  components: {
    LoginModal,
  },
  data() {
    return {
      activeClass: ''
    }
  },
  methods: {
    showModal() {
      this.activeClass = this.activeClass ? '' : 'is-active'
    }
  }
}
</script>

<template>
  <header>
    <div class="container is-max-desktop header-container">
      <div class="is-flex is-justify-content-space-between header-content">
        <div class="title-container">
          <img src="../assets/logo.png" alt="logo" class="logo" />
          <h3 class="title"> Discover all the place around the work with <em>Sunday</em></h3>
        </div>
        <div class="image-container is-flex is-justify-content-flex-end">
          <button class="js-modal-trigger mt-5 mr-2 contact-container">
            Contact Us
          </button>
          <button class="js-modal-trigger mt-5 mr-5 login-container" data-target="modal-js-example" @click="showModal">
            <span class="icon is-small">
              <i class="fas fa-user"></i>
            </span>
            Login
          </button>
        </div>
      </div>
    </div>
  </header>

  <main>
    <section class="container is-max-desktop form-container">
      <form class="is-flex is-flex-direction-row is-justify-content-center form-content box">
        <div class="field has-addons">
          <div class="control is-expanded">
            <div class="select">
              <select name="location">
                <option selected disabled>Select a location:</option>
              </select>
            </div>
          </div>
          <div class="control">
            <input type="date" class="is-size-6 input" />
          </div>
          <div class="control">
            <input type="date" class="is-size-6 input" />
          </div>
          <div class="control">
            <button type="button" class="is-size-6 button is-info px-6">Search</button>
          </div>
        </div>
      </form>
    </section>
    <section class="pt-6 container is-max-desktop">
      <h3 class="pt-5 is-size-3 mb-4">Choose the category</h3>
      <ul class="is-flex is-flex-direction-row is-justify-content-space-between">
        <li class="category-container">
          <a>
            <div class="countryside-category">
            </div>
            <h4 class="is-size-5 has-text-centered mt-1">Countryside</h4>
          </a>
        </li>
        <li class="category-container">
          <a>
            <div class="beach-category">
            </div>
            <h4 class="is-size-5 has-text-centered mt-1">Beach</h4>
          </a>
        </li>
        <li class="category-container">
          <a>
            <div class="city-category">
            </div>
            <h4 class="is-size-5 has-text-centered mt-1">City</h4>
          </a>
        </li>
        <li class="category-container">
          <a>
            <div class="resort-category">
            </div>
            <h4 class="is-size-5 has-text-centered mt-1">Resort</h4>
          </a>
        </li>
      </ul>
    </section>
  </main>

  <div :class="['modal', activeClass]">
    <LoginModal :showModal="closeModal" />
  </div>
</template>

<style scoped>
header {
  background-color: #003b95;
}

.header-container {
  position: relative;
}

.header-content {
  height: 450px;
}

.title-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.logo {
  width: 100px;
}

.title {
  color: white;
  font-size: 50px;
  font-weight: 400;
  margin-bottom: 80px;
}

.image-container {
  margin-left: 50px;
  background-image: url('../assets/telainicial.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.9;
  max-height: 450px;
  width: 100%;
}

.inicial-image {
  max-height: 100%;
  max-width: 100%;
}

.contact-container {
  color: #003b95;
  border: 1px solid white;
  height: 40px;
  padding: 3px 20px 5px;
  font-size: 20px;
  background-color: white;
  border-radius: 3px;
  cursor: pointer;
}

.contact-container:hover {
  background-color: rgb(238, 238, 238);
  border: 1px solid rgb(238, 238, 238);
}

.login-container {
  color: white;
  border: 1px solid white;
  height: 40px;
  padding: 3px 30px 5px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
}

.login-container:hover {
  background-color: #003b95;
}

.form-container {
  position: absolute;
  left: 50%;
  transform: translate(-50%, -40px);
}

.form-content {
  width: 100%;
}

.category-container {
  width: 23%;
  height: 350px;
}

.countryside-category {
  background-image: url('../assets/campo.jpg');
  height: 90%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 5px;
}

.beach-category {
  background-image: url('../assets/praia.jpg');
  height: 90%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 5px;
}

.city-category {
  background-image: url('../assets/city.jpg');
  height: 90%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 5px;
}

.resort-category {
  background-image: url('../assets/resort.jpg');
  height: 90%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 5px;
}

a,
a:active {
  color: var(--vt-c-black-mute);
}

a:hover {
  color: var(--vt-c-black-mute);
  filter:
    drop-shadow(4px 4px 5px #999999);
}
</style>

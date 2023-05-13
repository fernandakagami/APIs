<script setup>

</script>

<template>
  <header>
    <div class="container is-max-desktop header-container">
      <div class="is-flex is-justify-content-space-between">
        <div class="title-container">
          <img src="../assets/logo.png" alt="logo" class="logo" />
          <h3 class="title"> Discover all the place around the work with <em>Sunday</em></h3>
        </div>
        <div class="image-container">
          <img src="../assets/telainicial.jpg" alt="travel" class="inicial-image">
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
      <ul class="container is-flex is-flex-direction-row is-justify-content-space-between">
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
</template>

<style scoped>
header {
  background-color: #003b95;
  max-height: 450px;

}

.header-container {
  position: relative;
}

.title-container {
  max-width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.logo {
  width: 100px;
}

.title {
  margin-bottom: 150px;
  color: white;
  font-size: 50px;
  font-weight: 400;
}

.image-container {
  max-height: 450px;
  max-width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.inicial-image {
  max-height: 100%;
  max-width: 100%;
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

a, a:active, a:hover {
  color: var(--vt-c-black-mute);
}
</style>

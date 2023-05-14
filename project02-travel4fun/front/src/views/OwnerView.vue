<script>

</script>

<template>
  <header>
    <div class="container is-max-desktop">
      <img src="../assets/logo.png" alt="logo" class="logo" />
    </div>
  </header>
  <div class="container is-max-desktop">
    <form class="section is-medium">
      <h1 class="has-text-centered is-size-4 has-text-weight-bold">Owner Register</h1>
      <div class="field">
        <label class="label">Name</label>
        <div class="control">
          <input class="input" type="text">
        </div>
      </div>
      <div class="field">
        <label class="label">Email</label>
        <div class="control">
          <input class="input" type="email">
        </div>
      </div>
      <div class="field-body">
        <div class="field">
          <label class="label">Password</label>
          <div class="control">
            <input class="input" type="password">
          </div>
        </div>
        <div class="field">
          <label class="label">Confirmation password</label>
          <div class="control">
            <input class="input" type="password">
          </div>
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

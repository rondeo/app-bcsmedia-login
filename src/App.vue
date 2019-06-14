<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item" v-if="loggedIn">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item" v-if="loggedIn">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
          <li class="nav-item" v-if="!loggedIn">
            <router-link class="nav-link" to="/signup">Signup</router-link>
          </li>
          <li class="nav-item" v-if="!loggedIn">
            <router-link class="nav-link" to="/login">Login</router-link>
          </li>
          <li class="nav-item" v-if="loggedIn">
            <a href="#" class="nav-link" @click="logout">Logout</a>
            <!-- <router-link class="nav-link" to="/logout">Logout</router-link> -->
          </li>
        </ul>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  computed: {
    loggedIn () {
      return this.$store.getters.loggedIn
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('logout')
        .then(res => {
          this.$router.push('/')
        })
    }
  }
}
</script>

<style lang="scss">
@import './assets/scss/main.scss';
</style>

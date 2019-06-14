<template>
  <div class="container">
    <div class="row d-flex justify-content-center">
      <div class="col-md-8">
        <h2>Login Page</h2>
        <form @submit.prevent="login">
          <div class="form-group">
            <label for="username">Username/Email</label>
            <input type="username" class="form-control" id="username" placeholder="username" v-model="username">
          </div>

          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" id="password" placeholder="Password" v-model="password">
          </div>

          <button type="submit" class="btn btn-primary">Login</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
      this.$store.dispatch('login', {
        username: this.username,
        password: this.password
      })
        .then(response => {
          this.$router.push('/home')
        })
    }
  }
}
</script>

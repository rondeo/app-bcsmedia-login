<template>
  <div class="container">
    <div class="row d-flex justify-content-center">
      <div class="col-md-8">

      <h2>Signup Page</h2>

      <form @submit="register">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" class="form-control" id="name" placeholder="Name" v-model="name">
        </div>

        <div class="form-group">
          <label for="last_name">Last Name</label>
          <input type="text" class="form-control" id="last_name" placeholder="Last Name" v-model="last_name">
        </div>

        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" class="form-control" id="username" placeholder="Username" v-model="username">
        </div>

        <div class="form-group">
          <label for="email">Email address</label>
          <input type="email" class="form-control" id="email" placeholder="user@example.com" v-model="email">
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" class="form-control" id="password" placeholder="Password" v-model="password">
        </div>

        <div class="form-group">
          <label for="password_confirmation">Password Confirmation</label>
          <input type="password" class="form-control" id="password_confirmation" placeholder="Password Confirm" v-model="password_confirmation">
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'signup',
  data () {
    return {
      name: '',
      last_name: '',
      username: '',
      email: '',
      password: '',
      password_confirmation: ''
    }
  },
  methods: {
    signup: function () {
      let info = {
        name: this.name,
        email: this.email,
        password: this.password
      }

      this.$store.dispatch('signup', info).then(() => this.$router.push('/login'))
    }
  }
}
</script>

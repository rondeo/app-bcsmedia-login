import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    accessToken: localStorage.getItem('access_token') || null,
    currentUser: {}
  },
  mutations: {
    login (state, token) {
      state.accessToken = token
    },
    logout (state) {
      state.accessToken = null
    }
  },
  getters: {
    loggedIn (state) {
      return state.accessToken !== null
    }
  },
  actions: {
    // Login
    login (context, credential) {
      return new Promise((resolve, reject) => {
        axios.post('http://localhost:3000/auth/login', {
          username: credential.username,
          password: credential.password
        }, {
          headers: {
            'Access-Control-Allow-Origin': '*'
          }
        })
          .then(response => {
            if (response.data && response.data.status === 0) {
              console.log('Error login:', response.data.messages)
            } else {
              const token = response.data.token

              localStorage.setItem('access_token', token)
              context.commit('login', token)
              resolve(response)
            }
          })
          .catch(error => {
            console.log(error)
            reject(error)
          })
      })
    },
    // Logout
    logout (context) {
      if (context.getters.loggedIn) {
        return new Promise((resolve, reject) => {
          localStorage.removeItem('access_token')
          context.commit('logout')
          resolve()
        })
      }
    }
  }
})

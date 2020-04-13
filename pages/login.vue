<template>
    <v-col md12>
      <v-card class="pa-4">
        <v-form>
          <v-text-field v-model="login.email" placeholder="Email"/>
          <v-text-field v-model="login.password" placeholder="Password"/>
          <v-btn @click="getToken"> Login </v-btn>
        </v-form>
      </v-card>
    </v-col>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    layout: 'login',
    name: 'login',
    data() {
      return {
        login: {
          email: null,
          password: null
        }
      }
    },
    methods: {
      ...mapActions({
        loginAction: 'auth/login'
      }),
      async getToken() {
        this.loginAction(this.login)
      }
    }
  }
</script>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="container text-center">
    <div class="row align-items-start">
      <div class="row"></div>
      <div class="row">
        <div class="row justify-content-start">
          <div class="row">
            <router-link to="/">
              <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
            </router-link>
            <br />
            <router-link to="/crear">Crear</router-link>
            <router-link to="/listar">Listar</router-link>
          </div>
          <div class="row">
            <div class="login">
              <h1 class="title">Iniciar Sesion</h1>
              <form action class="form" @submit.prevent="login">
                <label class="form-label" for="#email">Correo:</label>
                <input class="form-input" type="email" id="email" required placeholder="Email" />
                <label class="form-label" for="#password">Contraseña:</label>
                <input class="form-input" type="password" id="password" placeholder="Password" />
                <p v-if="error" class="error">Has introducido mal el email o la contraseña.</p>
                <input class="form-submit" type="submit" value="login" />
              </form>
            </div>
          </div>
          <div class="row">
            <div class="col-all"></div>
          </div>
        </div>
      </div>
      <div class="col"></div>
    </div>
  </div>
  <router-view></router-view>
</template>

<script>
export default {
  data: () => ({
    email: '',
    password: ''
  }),
  methods: {
    login() {
      console.log(this.email)
      console.log(this.password)
      this.$router.push('/dashboard')
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  padding: 2rem;
}

.title {
  text-align: center;
}

.form {
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20%;
  min-width: 350px;
  max-width: 100%;
  background: rgba(48, 69, 84, 0.9);
  border-radius: 5px;
  padding: 40px;
  box-shadow: 0 4px 10px 4px rgba(0, 0, 0, 0.3);
}

.form-label {
  margin-top: 2rem;
  color: white;
  margin-bottom: 0.5rem;

  &:first-of-type {
    margin-top: 0rem;
  }
}

.form-input {
  padding: 10px 15px;
  background: none;
  background-image: none;
  border: 1px solid white;
  color: white;

  &:focus {
    outline: 0;
    border-color: #1ab188;
  }
}

.form-submit {
  background: #1ab188;
  border: none;
  color: white;
  margin-top: 3rem;
  padding: 1rem 0;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #0b9185;
  }
}
</style>

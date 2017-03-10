<template>
  <div id="app">
    <img src="./assets/logo.png">
    <demo></demo>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import Demo from './pages/index.vue' // 引入組件

export default {
  name: 'app',
  components: {
    Demo
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

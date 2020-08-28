<template>
  <div id="app">

    <div class="header">
      <h2>Mingress</h2>
    </div>

    <div class="sidenav">
      <div style="padding-top: 80px"> </div>
      <md-button class="md-primary">Main Dash</md-button>
      <md-button class="md-primary">All Products</md-button>
      <md-button class="md-primary">Search</md-button>
    </div>

    <div class="content">
      <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from './components/HelloWorld.vue';

export default Vue.extend({
  name: 'App',
  components: {
    HelloWorld
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.header {
  padding: 10px 20px;
  background: #555;
  color: #f1f1f1;
  position: fixed;
  text-align: left;
  top: 0;
  z-index: 1;
  width: 100%;
}

.sidenav {
  height: 100%;
  width: 160px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 0;
  background-color: #111;
  overflow-x: hidden;
  padding-top: 20px;
}

.content {
  margin-left: 160px;
  padding: 25px 10px;
}

</style>

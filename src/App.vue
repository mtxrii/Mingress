<template>
  <div id="app">

    <div class="header">
      <img alt="Vue logo" src="./assets/logo.png" width="14%">
    </div>

    <div class="sidenav">
      <div style="padding-top: 60px"> </div>
      <md-button id="nav-button" class="md-primary">
        Main Dash
        <span style="color: black">..</span>
      </md-button>
      <md-button id="nav-button" class="md-primary">All Products</md-button>
      <md-button id="nav-button" class="md-primary">Search</md-button>
    </div>

    <div class="content">
      <Table v-bind:content="products" v-bind:addButton="addProduct"/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Table from './components/Table.vue';

export default Vue.extend({
  name: 'App',

  components: {
    Table
  },

  data: function() {
    return {
      products: [
        {id: 1, name: "thing1", price: 10},
        {id: 2, name: "object2", price: 50},
        {id: 3, name: "item3", price: 20},
      ]
    }
  },

  methods: {
    addProduct() {
      this.products.push({
        id: 4,
        name: "product4",
        price: 100
      });
    }
  }

});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

.header {
  padding: 10px 20px;
  background: #0f0c29;
  background: -webkit-linear-gradient(to right, #0f0c29, #302b63, #24243e);
  background: linear-gradient(to right, #0f0c29, #302b63, #24243e);
  border-bottom: solid rgba(15, 12, 41, 50%) 5px;
  color: #f1f1f1;
  position: fixed;
  text-align: left;
  top: 0;
  z-index: 2;
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

#nav-button {
  display: block;
  width: 100%;
  margin-bottom: -5px;
}

</style>

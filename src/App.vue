<template>
  <div id="app" class="page-container">

    <md-app md-waterfall md-mode="fixed">
      <md-app-toolbar class="md-primary">
        <img alt="Vue logo" src="./assets/logo.png" width="14%">
      </md-app-toolbar>

      <md-app-drawer md-permanent="full">
        <md-toolbar class="md-transparent" md-elevation="0">
          <h1 class="md-title">Views</h1>
        </md-toolbar>

        <md-list>
          <md-button :md-ripple="false"><md-icon>home</md-icon>Main Dash</md-button>
          <md-button :md-ripple="false"><md-icon>view_list</md-icon>All Products</md-button>
          <md-button :md-ripple="false"><md-icon>search</md-icon>Search</md-button>
        </md-list>
      </md-app-drawer>

      <md-app-content>
        <Table v-bind:content="products" 
          v-bind:addButton="addProduct" 
          v-bind:deleteButton="deleteProduct" 
          v-bind:editButton="editProduct"/>
      </md-app-content>
    </md-app>
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
    },

    deleteProduct(id: number) {
      for (let i = 0; i < this.products.length; i++) {
        if (this.products[i].id === id) {
          this.products.splice(i, 1);
        }
      }
    },

    editProduct(id: number) {
      // for ()
    }
  }

});
</script>

<style lang="scss" scoped>
.md-app {
  height: 100vh;
  border: 0px solid rgba(#000, .12);
}

.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}

.md-icon {
  margin-right: 10px;
}

img {
  width: 180px;
  -webkit-filter: drop-shadow(5px 5px 5px #222);
  filter: drop-shadow(5px 5px 5px #222);
}
</style>

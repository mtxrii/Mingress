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
          v-bind:deleteButton="deleteProduct" 
          v-bind:editButton="editProduct"/>
      </md-app-content>
    </md-app>

    <modal name="add-product">
      <div style="padding: 40px">
        <div class="md-title">Add Product</div>
        <md-field>
          <md-icon>label</md-icon>
          <label>Name</label>
          <md-input v-model="newProductName"></md-input>
        </md-field>
        <md-field>
          <md-icon>local_atm</md-icon>
          <label>Price</label>
          <md-input v-model="newProductPrice"></md-input>
        </md-field>
        <md-button @click="proceedWithAdd" class="md-primary">Save</md-button>
        <md-button @click="cancelAdd">Cancel</md-button>
      </div>
    </modal>

    <md-snackbar md-position="center" md-duration="2000" :md-active.sync="showSnackbar1" md-persistent>
      <span>Product price must be a number.</span>
      <md-button class="md-accent" @click="showSnackbar1 = false">OK</md-button>
    </md-snackbar>

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
      ],

      newProductName: '',
      newProductPrice: '',

      showSnackbar1: false
    }
  },

  methods: {
    addProduct(newName: string, newPrice: number) {
      const newID = this.products.length + 1;
      this.products.push({
        id: newID,
        name: newName,
        price: newPrice
      });
    },

    cancelAdd() {
      this.newProductName = '';
      this.newProductPrice = '';
      this.$modal.hide('add-product');
      this.showSnackbar1 = false;
    },

    proceedWithAdd() {
      if (isNaN(+this.newProductPrice)) {
        this.showSnackbar1 = true;
      }
      else {
        this.addProduct(this.newProductName, parseInt(this.newProductPrice));
        this.cancelAdd();
      }
    },

    deleteProduct(id: number) {
      this.products.splice(id-1, 1);
      this.reIndex();
    },

    editProduct(id: number) {
      // for ()
    },

    reIndex() {
      for (let i = 1; i <= this.products.length; i++) {
        this.products[i-1].id = i;
      }
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

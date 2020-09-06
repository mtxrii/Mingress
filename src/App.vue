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
          <md-button :md-ripple="false" @click="currentPage = 0"><md-icon>home</md-icon>Main Dash</md-button>
          <md-button :md-ripple="false" @click="currentPage = 1"><md-icon>view_list</md-icon>All Products</md-button>
          <md-button :md-ripple="false" @click="currentPage = 2"><md-icon>search</md-icon>Search</md-button>
        </md-list>
      </md-app-drawer>

      <md-app-content>
        <Table v-if="currentPage == 0"
          v-bind:content="products"
          v-bind:deleteButton="deleteProduct" 
          v-bind:editButton="openEditModal"/>
        <TableFull v-if="currentPage == 1"
          v-bind:content="products"
          v-bind:deleteButton="deleteProduct" 
          v-bind:editButton="openEditModal"/>
        <TableSearch v-if="currentPage == 2"
          v-bind:content="products"
          v-bind:deleteButton="deleteProduct" 
          v-bind:editButton="openEditModal"/>
        <br>
        <Stats v-if="currentPage == 0"
          v-bind:content="products"
          v-bind:productStats="productStats"
          v-bind:priceCategories="priceCategories"/>
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
        <md-button @click="resetAdd">Cancel</md-button>
      </div>
    </modal>

    <modal name="edit-product">
      <div style="padding: 40px">
        <div class="md-title">Edit Product #{{editProductID}}</div>
        <md-field>
          <md-icon>label</md-icon>
          <label>Name</label>
          <md-input v-model="editProductName"></md-input>
        </md-field>
        <md-field>
          <md-icon>local_atm</md-icon>
          <label>Price</label>
          <md-input v-model="editProductPrice"></md-input>
        </md-field>
        <md-button @click="proceedWithEdit" class="md-primary">Save</md-button>
        <md-button @click="resetEdit">Cancel</md-button>
      </div>
    </modal>

    <md-snackbar md-position="center" :md-duration="+2000" :md-active.sync="showSnackbar" md-persistent>
      <span>Product price must be a number.</span>
      <md-button class="md-accent" @click="showSnackbar = false">OK</md-button>
    </md-snackbar>

  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Table from './components/Table.vue'
import TableFull from './components/Table-full.vue'
import TableSearch from './components/Table-search.vue'
import Stats from './components/Stats.vue'

import {keys} from '../src/keys'
import {URLs} from '../src/main'

export default Vue.extend({
  name: 'App',

  components: {
    Table,
    TableFull,
    TableSearch,
    Stats
  },

  data: function() {
    return {
      products: [
        {id: 1, name: "string", price: 10}
      ],

      newProductName: '',
      newProductPrice: '',

      editProductID: '',
      editProductName: '',
      editProductPrice: '',

      productStats: {
        totalProducts: 0,
        avgProductPrice: 0,
        totalProductsValue: 0,
        avgNameLength: 0,
        totalExpensive: 0,
      },

      priceCategories: [
        { value: 0, label: '$0 - $10', color: '#ff5252' },
        { value: 0, label: '$11 - $100', color: '#448aff' },
        { value: 0, label: '$101 - $1,000', color: '#ffb744' },
        { value: 0, label: '$1,001 - $10,000', color: '#54c72e' },
        { value: 0, label: '$10,000 +', color: '#6b2ec7' }
      ],

      showSnackbar: false,
      currentPage: 0
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

      this.loadStats();
      this.loadPrices();
    },

    resetAdd() {
      this.newProductName = '';
      this.newProductPrice = '';
      this.$modal.hide('add-product');
      this.showSnackbar = false;
    },

    proceedWithAdd() {
      if (isNaN(+this.newProductPrice)) {
        this.showSnackbar = true;
      }
      else {
        this.addProduct(this.newProductName, parseInt(this.newProductPrice));
        this.resetAdd();
      }
    },

    openEditModal(id: number) {
      this.editProductID = id.toString();
      this.editProductName = this.products[id-1].name;
      this.editProductPrice = this.products[id-1].price.toString();
      this.$modal.show('edit-product');
    },

    editProduct(id: number, newName: string, newPrice: number) {
      this.products[id-1].name = newName;
      this.products[id-1].price = newPrice;

      this.loadStats();
      this.loadPrices();
    },

    resetEdit() {
      this.editProductID = '';
      this.editProductName = '';
      this.editProductPrice = '';
      this.$modal.hide('edit-product');
      this.showSnackbar = false;
    },

    proceedWithEdit() {
      if (isNaN(+this.editProductPrice)) {
        this.showSnackbar = true;
      }
      else {
        this.editProduct(parseInt(this.editProductID), this.editProductName, parseInt(this.editProductPrice));
        this.resetEdit();
      }
    },

    deleteProduct(id: number) {
      this.products.splice(id-1, 1);
      this.reIndex();
      
      this.loadStats();
      this.loadPrices();
    },

    reIndex() {
      for (let i = 1; i <= this.products.length; i++) {
        this.products[i-1].id = i;
      }
    },
    
    loadStats() {
      const ammount = this.products.length;

      let totalPrice = 0;
      let totalNameLength = 0;
      let above10k = 0;
      this.products.forEach(product => {
        totalPrice += product.price;
        totalNameLength += product.name.length
        if (product.price > 10000) above10k ++;
      });

      this.productStats.totalProducts = ammount;
      this.productStats.avgProductPrice = Math.round(totalPrice / ammount);
      this.productStats.totalProductsValue = totalPrice;
      this.productStats.avgNameLength = Math.round(totalNameLength / ammount);
      this.productStats.totalExpensive = above10k;
    },

    loadPrices() {
      let to10 = 0;
      let to100 = 0;
      let to1000 = 0;
      let to10000 = 0;
      let over10k = 0;
      this.products.forEach(product => {
        const value = product.price;
        if (value < 11) to10 ++;
        else if (value < 101) to100 ++;
        else if (value < 1001) to1000 ++;
        else if (value < 10001) to10000 ++;
        else over10k ++;
      });
      const total = to10 + to100 + to1000 + to10000 + over10k;

      this.priceCategories[0].value = (to10 / total) * 100;
      this.priceCategories[1].value = (to100 / total) * 100;
      this.priceCategories[2].value = (to1000 / total) * 100;
      this.priceCategories[3].value = (to10000 / total) * 100;
      this.priceCategories[4].value = (over10k / total) * 100;
    }
  },

  beforeMount() {
    this.products.length = 0;
    Vue.axios
      .get(URLs.proxy + URLs.app + 'products/' + keys.backend)
      .then(response => {
        this.products = response.data;
        this.loadStats();
        this.loadPrices();
      })
      .catch(error => {
        alert("The product API could not be reached right now.");
        this.products = [
          {id: 1, name: "Example product 1", price: 10},
          {id: 2, name: "Example product 2", price: 50},
          {id: 3, name: "Example product 3", price: 100},
        ]
      });
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

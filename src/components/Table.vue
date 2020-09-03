<template>
  <div>
    <md-table v-model="products" md-sort="id" md-sort-order="desc" md-card>
      <md-table-toolbar>
        <h1 class="md-title">All Products</h1>
      </md-table-toolbar>

      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="ID" md-sort-by="id">{{ item.id }}</md-table-cell>
        <md-table-cell md-label="Name" md-sort-by="name">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="Price" md-sort-by="price">${{ item.price }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Table',
  data: function() {
    return {
      products: [
        {id: 1, name: "thing1", price: 10},
        {id: 2, name: "object2", price: 50},
        {id: 3, name: "item3", price: 20},
      ]
    }
  },


});
</script>

<style scoped>

</style>

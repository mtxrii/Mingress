<template>
  <div>
    <md-table v-model="content" md-sort="id" md-sort-order="asc" md-card>
      <md-table-toolbar>
        <h1 class="md-title">All Products</h1>
        <md-button class="md-icon-button md-primary md-raised" @click="addButton">
          <md-icon>add</md-icon>
        </md-button>
      </md-table-toolbar>

      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="ID" md-sort-by="id">{{ item.id }}</md-table-cell>
        <md-table-cell md-label="Name" md-sort-by="name">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="Price" md-sort-by="price">${{ item.price }}</md-table-cell>
        <md-table-cell>
          <md-button class="md-icon-button md-accent md-raised" @click="deleteButton(item.id)">
            <md-icon>delete</md-icon>
          </md-button>
          <md-button class="md-icon-button md-primary md-raised" @click="editButton(item.id)">
            <md-icon>create</md-icon>
          </md-button>
        </md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Table',

  props: {
    content: Array,
    addButton: Function,
    deleteButton: Function,
    editButton: Function
  },


});
</script>

<style scoped>

</style>

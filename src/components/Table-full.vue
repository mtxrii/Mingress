<template>
  <div>
    <md-table v-model="content" md-sort="id" md-sort-order="asc" md-card>
      <md-table-toolbar>
        <h1 class="md-title">Products</h1>
        <md-button class="md-icon-button md-primary md-raised" @click="$modal.show('add-product')">
          <md-icon>add</md-icon>
        </md-button>
      </md-table-toolbar>

      <md-table-empty-state v-if="!empty" md-label="Loading...">
        <md-progress-spinner md-mode="indeterminate"></md-progress-spinner>
      </md-table-empty-state>

      <md-table-empty-state
        v-else
        md-icon="devices_other"
        md-label="No products yet"
        md-description="This table will auto populate with products as they're added.">
        <md-button class="md-primary md-raised" @click="$modal.show('add-product')">new product</md-button>
      </md-table-empty-state>

      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="ID" md-sort-by="index">{{ item.index }}</md-table-cell>
        <md-table-cell md-label="Name" md-sort-by="name">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="Price" md-sort-by="price">${{ item.price }}</md-table-cell>
        <md-table-cell>
          <md-button class="md-icon-button md-accent md-raised" @click="deleteButton(item.id, item.index)">
            <md-icon>delete</md-icon>
          </md-button>
          <md-button class="md-icon-button md-primary md-raised" @click="editButton(item.id, item.index)">
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
  name: 'TableFull',

  props: {
    content: Array,
    empty: Boolean,
    
    deleteButton: Function,
    editButton: Function
  },


});
</script>

<style scoped>

</style>

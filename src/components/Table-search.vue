<template>
  <div>
    <md-table v-model="searched" md-sort="id" md-sort-order="asc" md-card md-fixed-header>
      <md-table-toolbar>
        <h1 class="md-title">Products</h1>
        <md-field md-clearable class="md-toolbar-section-end">
          <md-input placeholder="Search by name..." v-model="search" @input="searchOnTable" />
        </md-field>
      </md-table-toolbar>

      <md-table-empty-state
        v-if="!empty"
        md-label="No products found"
        md-description="No product found with this name. Try a different search or add a new product.">
        <md-button class="md-primary md-raised" @click="$modal.show('add-product')">new product</md-button>
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

<script>
import Vue from 'vue';

// eslint-disable-next-line
const searchByName = (items, term) => {
  if (term) {
    return items.filter(item => item.name.toString().toLowerCase().includes(term.toString().toLowerCase()));
  }
  return items;
}

export default Vue.extend({
  name: 'TableSearch',

  props: {
    content: Array,
    empty: Boolean,
    
    deleteButton: Function,
    editButton: Function
  },

  data: function() {
    return {
      search: '',
      searched: []
    }
  },

  methods: {
    searchOnTable() {
      this.searched = this.content.filter(item => item.name.toString().toLowerCase().includes(this.search.toLowerCase()));
    }
  },

  beforeMount() {
    this.searched = this.content;
  }


});
</script>

<style scoped>

</style>

<template>
  <div id="container">
    <md-card>
      <md-card-header>
        <div class="md-title">Stats</div>
      </md-card-header>

      <md-card-content>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.
      </md-card-content>
    </md-card>
    
    <md-card>
      <md-card-header>
        <div class="md-title">Prices</div>
      </md-card-header>

      <md-card-content>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.
      </md-card-content>
    </md-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Stats',

  props: {
    content: Array
  },

});
</script>

<style lang="scss" scoped>
.md-card {
  width: calc(50% - 32px);
  margin-top: 4px;
  float: left;
}
</style>
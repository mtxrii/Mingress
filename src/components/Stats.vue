<template>
    <div id="container">
        <md-card>
            <md-card-header>
                <div class="md-title">
                    Stats
                    <md-button class="md-icon-button md-dense md-raised">
                        <md-icon>cached</md-icon>
                    </md-button>
                </div>
            </md-card-header>

            <md-card-content>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.
            </md-card-content>
        </md-card>
        
        <md-card>
            <md-card-header>
                <div class="md-title">
                    Prices
                    <md-button class="md-icon-button md-dense md-raised">
                        <md-icon>cached</md-icon>
                    </md-button>
                </div>
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

.md-icon-button {
  float: right;
}
</style>
<template>
    <div id="container">
        <md-card>
            <md-card-header>
                <div class="md-title">
                    Stats
                </div>
            </md-card-header>

            <md-card-content>
                <div style="padding: 4px"></div>
                <span class="md-subheading">
                    <md-icon>category</md-icon> Total Products: ....................... <strong>{{productStats.totalProducts}}</strong>
                    <div style="margin-top: 10px"></div>
                    <md-icon>local_offer</md-icon> Average Product price: ......... <strong>${{productStats.avgProductPrice}}</strong>
                    <div style="margin-top: 10px"></div>
                    <md-icon>account_balance</md-icon> Total Listed Asset Value: ..... <strong>${{productStats.totalProductsValue}}</strong>
                    <div style="margin-top: 10px"></div>
                    <md-icon>text_rotation_none</md-icon> Average Name Length: ........... <strong>{{productStats.avgNameLength}}</strong>
                    <div style="margin-top: 10px"></div>
                    <md-icon>money</md-icon> Total Products Above 10K: ..... <strong>{{productStats.totalExpensive}}</strong>
                </span>
                <div style="padding: 4px"></div>
            </md-card-content>
        </md-card>
        
        <md-card>
            <md-card-header>
                <div class="md-title">
                    Price Ranges
                </div>
            </md-card-header>

            <md-card-content>
                <vc-donut :sections="priceCategories"
                    :size="170" 
                    has-legend 
                    legend-placement="left">
                </vc-donut>
            </md-card-content>
        </md-card>
    </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
    name: 'Stats',

    props: {
        content: Array,

        productStats: Object,
        priceCategories: Array
    }

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
<template>
    <div id="container">
        <md-card>
            <md-card-header>
                <div class="md-title">
                    Stats
                </div>
            </md-card-header>

            <md-card-content v-if="!empty">
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

            <md-card-content v-else>
                <md-empty-state
                    md-size="170"
                    md-rounded
                    md-description="Nothing to show. Add products to analyze">
                </md-empty-state>
            </md-card-content>
        </md-card>
        
        <md-card>
            <md-card-header>
                <div class="md-title">
                    Price Ranges
                </div>
            </md-card-header>

            <md-card-content>
                <vc-donut
                    v-if="!empty"
                    :sections="priceCategories"
                    :size="170" 
                    has-legend 
                    legend-placement="left">
                </vc-donut>

                <vc-donut
                    v-else
                    :sections="example"
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
        empty: Boolean,

        productStats: Object,
        priceCategories: Array
    },

    data: function() {
        return {
            example: [
                { value: 0, label: '$0 - $10', color: '#ff5252' },
                { value: 0, label: '$11 - $100', color: '#448aff' },
                { value: 0, label: '$101 - $1,000', color: '#ffb744' },
                { value: 0, label: '$1,001 - $10,000', color: '#54c72e' },
                { value: 0, label: '$10,000 +', color: '#6b2ec7' }
            ]
        }
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
<template>
    <div id="container">
        <md-card>
            <md-card-header>
                <div class="md-title">
                    Stats
                    <md-button class="md-icon-button md-dense md-raised" @click="loadStats">
                        <md-icon>cached</md-icon>
                    </md-button>
                </div>
            </md-card-header>

            <md-card-content>
                <div style="padding: 4px"></div>
                <span class="md-subheading">
                    <md-icon>category</md-icon> Total Products: ....................... <strong>{{totalProducts}}</strong>
                    <div style="margin-top: 10px"></div>
                    <md-icon>local_offer</md-icon> Average Product price: ......... <strong>${{avgProductPrice}}</strong>
                    <div style="margin-top: 10px"></div>
                    <md-icon>account_balance</md-icon> Total Listed Asset Value: ..... <strong>${{totalProductsValue}}</strong>
                    <div style="margin-top: 10px"></div>
                    <md-icon>text_rotation_none</md-icon> Average Name Length: ........... <strong>{{avgNameLength}}</strong>
                    <div style="margin-top: 10px"></div>
                    <md-icon>money</md-icon> Total Products Above 10K: ..... <strong>{{totalExpensive}}</strong>
                </span>
                <div style="padding: 4px"></div>
            </md-card-content>
        </md-card>
        
        <md-card>
            <md-card-header>
                <div class="md-title">
                    Price Ranges
                    <md-button class="md-icon-button md-dense md-raised" @click="loadPrices">
                        <md-icon>cached</md-icon>
                    </md-button>
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
        content: Array
    },

    data: function() {
        return {
            totalProducts: 0,
            avgProductPrice: 0,
            totalProductsValue: 0,
            avgNameLength: 0,
            totalExpensive: 0,

            priceCategories: [
                { value: 0, label: '$0 - $10', color: '#ff5252' },
                { value: 0, label: '$11 - $100', color: '#448aff' },
                { value: 0, label: '$101 - $1,000', color: '#ffb744' },
                { value: 0, label: '$1,001 - $10,000', color: '#54c72e' },
                { value: 0, label: '$10,000 +', color: '#6b2ec7' }
            ]
        }
    },

    mounted() {
        this.loadStats();
        this.loadPrices();
    },

    methods: {
        loadStats() {
            const ammount = this.content.length;

            let totalPrice = 0;
            let totalNameLength = 0;
            let above10k = 0;
            this.content.forEach(product => {
                totalPrice += product.price;
                totalNameLength += product.name.length
                if (product.price > 10000) above10k ++;
            });

            this.totalProducts = ammount;
            this.avgProductPrice = Math.round(totalPrice / ammount);
            this.totalProductsValue = totalPrice;
            this.avgNameLength = Math.round(totalNameLength / ammount);
            this.totalExpensive = above10k;
        },

        loadPrices() {
            let to10 = 0;
            let to100 = 0;
            let to1000 = 0;
            let to10000 = 0;
            let over10k = 0;
            this.content.forEach(product => {
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
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
                <span class="md-subheading">
                    <md-icon>category</md-icon> Total Products: ....................... <strong>{{totalProducts}}</strong>
                    <div style="margin-top: 10px"></div>
                    <md-icon>local_offer</md-icon> Average Product price: ......... <strong>${{avgProductPrice}}</strong>
                    <div style="margin-top: 10px"></div>
                    <md-icon>account_balance</md-icon> Total Listed Asset Value: ..... <strong>${{totalProductsValue}}</strong>
                    <div style="margin-top: 10px"></div>
                    <md-icon>text_rotation_none</md-icon> Average Name Length: ........... <strong>{{avgNameLength}}</strong>
                </span>
            </md-card-content>
        </md-card>
        
        <md-card>
            <md-card-header>
                <div class="md-title">
                    Prices
                    <md-button class="md-icon-button md-dense md-raised" @click="loadPrices">
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

            priceCategories: {
                first: 0,
                second: 0,
                third: 0,
                fourth: 0
            }
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
            this.content.forEach(product => {
                totalPrice += product.price;
                totalNameLength += product.name.length
            });

            this.totalProducts = ammount;
            this.avgProductPrice = Math.round(totalPrice / ammount);
            this.totalProductsValue = totalPrice;
            this.avgNameLength = Math.round(totalNameLength / ammount);
        },

        loadPrices() {
            let to10 = 0;
            let to100 = 0;
            let to1000 = 0;
            let to10000 = 0;
            this.content.forEach(product => {
                const value = product.price;
                if (value < 11) to10 ++;
                else if (value < 101) to100 ++;
                else if (value < 1001) to1000 ++;
                else to10000 ++;
            });

            this.priceCategories.first = to10;
            this.priceCategories.second = to100;
            this.priceCategories.third = to1000;
            this.priceCategories.fourth = to10000;
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
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
            avgNameLength: 0
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
            this.avgProductPrice = totalPrice / ammount;
            this.totalProductsValue = totalPrice;
            this.avgNameLength = totalNameLength / ammount;
        },

        loadPrices() {
            
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
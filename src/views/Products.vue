<template>
    
    <div class="products-container">
        <base-card v-for="product in products" key="product.id">
            <div class="product">
                <div class="tittle">
                    <h3>{{ product.name }}</h3>
                </div>
                <div class="desc">
                    <p>{{ product.desc }}</p>
                </div>
                <div class="price">
                    <h4>${{ product.price }}</h4>
                </div>
                <base-button @click="addToCart(product.id)" :action="'Add to cart'"></base-button>
            </div>
        </base-card>
    </div>
</template>

<script>
export default{
    computed: {
        products(){
            return this.$store.getters.products
        }
    },
    methods: {
        addToCart(id){
            this.$store.dispatch('addToCart',id)
        }
    },
};
</script>

<style scoped>

    .products-container{
        display: grid;
        grid-template-columns: 1fr;
        gap: 30px;
        margin: auto;
        margin-top: 90px;
        width: 90%;
        
    }
    .product{
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    @media (min-width:768px){
        .products-container{
            grid-template-columns: repeat(2,auto);
            gap: 20px;
            padding: 0px 20px;
            width: 85%;
            margin: auto;
            margin-top: 90px;
        }
    }
    @media (min-width:900px){
        .products-container{
            width: 75%;
        }
    }
</style>
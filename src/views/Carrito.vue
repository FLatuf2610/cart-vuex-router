<template>
    <div class="router-wrapper">
        <transition name="main" mode="out-in">
        <div class="empty" v-if="cartProducts.length == 0">There are no products in the cart, add some!</div>
        <transition-group tag="div" class="product-container" name="products" v-else>
            <div class="product-card" v-for="product in cartProducts" :key="product.id">
                <base-card>
                <div class="product">
                    <h3>{{ product.name }}</h3>
                    <p>${{ product.price }}</p>
                    <div>Cantidad: <div class="quantity"><QuantityButton @click="delete1(product.id)" :action="'-'"/> <input readonly type="text" v-model="product.quantity"> <QuantityButton @click="add1(product.id)" :action="'+'" /></div>
                </div>
                    <base-button :action="'Delete item'" @click="deleteFromCart(product.id)"></base-button>
                </div>    
            </base-card>
            </div>
            <div class="total" v-if="cartProducts.length > 0">
            <p>Total: ${{ Total }}</p>
            </div>
        </transition-group>
    </transition>

    </div>

</template>

<script>
import QuantityButton from '../components/UI/QuantityButton.vue';

export default{
    computed: {
        cartProducts() {
            return this.$store.getters.cartProducts;
        },
        Total() {
            return this.$store.getters.total;
        },
        cart() {
            return this.$store.getters.cart;
        }
    },
    methods: {
        deleteFromCart(id) {
            this.$store.dispatch('deleteFromCart', id);
        },
        add1(id){
            this.$store.dispatch('add1',id)
        },
        delete1(id){
            this.$store.dispatch('delete1',id)
        }
    },
    components: { QuantityButton }
};
</script>

<style scoped>
.product-card{
    width: 90%;
    margin: auto;
}

.products-leave-from{
    opacity: 1;
}
.products-leave-active{
    transition: 0.3s;
    position: absolute;
}
.products-leave-to{
    opacity: 0;
    transform: translateX(30px);
}
.products-move{
    transition: transform 0.6s;
}
    .main-leave-from{
        opacity: 1;
    }
    .main-leave-active{
        transition: 0.2s;
    }
    .main-leave-to{
        opacity: 0;
        transform: translate(30px);
    }

input{
    border: none;
    outline: none;
    width: 20px;
    padding-left: 5px;
}

.quantity{
    display: flex;
}

.product-container{
    display: grid;
    grid-template-columns: auto;
    gap: 30px;
    margin-top: 85px;
}
.empty{
    margin-top: 85px;
    padding: 20px;
    text-align: center;
}

.product{
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.total{
    width: 95%;
    margin: auto;
    padding: 20px;
}

@media (min-width:768px){
        .product-container{
            gap: 20px;
            margin: auto;
            margin-top: 90px;
        }
        .product-card{
            width: 70%;
        }
        .total{
            width: 70%;
        }
    }
@media (min-width:900px){
    .product-card{
        width: 55%;
    }
    .total{
        width: 55%;
    }
}
</style>
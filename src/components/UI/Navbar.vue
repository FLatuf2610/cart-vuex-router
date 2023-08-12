<template>
    <div class="navbar-container">
        <div class="a">
            <router-link id="cart" to="/carrito">Cart</router-link>
            <div class="cart-qty">{{ cartQty }}</div>
        </div>
        
        <router-link to="/">Home</router-link>
    </div>
    

</template>

<script>
import { RouterLink } from 'vue-router';
export default{
computed: {
    cartQty(){
        return this.$store.getters.cartQty
    }
},
};
</script>

<style scoped>
    .navbar-container{
        display: flex;
        justify-content: space-evenly;
        padding: 20px;
        background-color: blue;
        position: fixed;
        top: 0;
        width: 100%;
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
        z-index: 100000;
    }
    a{
        font-size: 20px;
        color: white;
        text-decoration: none;
        position: relative;
    }

    a::after{
        position: absolute;
        bottom: 0;
        content: '';
        width: 100%;
        height: 2px;
        background-color: white;
        left: 0;
        transform: scaleX(0.2);
        transition: 0.3s;
        opacity: 0;
    }
    .router-link-active::after{
        transform: scaleX(1);
        opacity: 1;
        
    }
    .a{
        position: relative;
    }
    .cart-qty{
        position: absolute;
        top: -3px;
        right: -15px;
        font-size: 15px;
        color: white;
        background-color: red;
        width: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
    }
</style>
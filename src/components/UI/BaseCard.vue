<template>
    <div class="container">
        <slot></slot>
    </div>
</template>

<style scoped>
    .container{
        border-radius: 10px;
        box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.2);
        width: 90%;
        margin: auto;
        padding: 20px;
        box-sizing: border-box;
    }
    @media (min-width:768px){
        .container{
            width: 100%;
        }
    }
</style>
<template> 
<button>{{ action }}</button>
</template>

<script>
    export default{
        props:['action']
    };
</script>

<style scoped>
    button{
        color: white;
        background-color: blue;
        border: none;
        border-radius: 15px;
        padding: 8px 10px;
        font-weight: 700;
        width: 75%;
        margin: auto;
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
        cursor: pointer;
        position: relative;
    }

    button::after{
        content: '';
        height: 33px;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.15);
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 15px;
        transform: scale(0.50);
        opacity: 0;
        transition: 0.2s;
        
    }
    button:hover::after{
        transform: scale(1);
        opacity: 1;
    }
</style>
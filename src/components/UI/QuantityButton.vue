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
        color: blue;
        background-color: white;
        border: none;
        width: 20px;
        font-size: 20px;
        cursor: pointer;
    }

</style>
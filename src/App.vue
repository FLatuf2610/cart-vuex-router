
<template>
<Navbar/>
<router-view v-slot="slotProps">
  <transition name="router" mode="out-in">
    <component :is="slotProps.Component"></component>
  </transition>
</router-view>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/UI/Navbar.vue';
export default{
  components:{Navbar},
};
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}

.router-enter-from,
.router-leave-to{
  opacity: 0;
}
.router-enter-active,
.router-leave-active{
  transition: 0.2s;
}
.router-enter-to,
.router-leave-from{
  opacity: 1;
}


</style>
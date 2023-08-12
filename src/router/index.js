import { createRouter, createWebHistory } from 'vue-router'
import Products from '../views/Products.vue'
import Carrito from '../views/Carrito.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes:[
    {path:'/', component:Products},
    {path:'/carrito',component:Carrito}

  ]
})

export default router

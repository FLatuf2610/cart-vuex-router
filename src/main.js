import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import BaseButton from './components/UI/BaseButton.vue'
import BaseCard from './components/UI/BaseCard.vue'
import QuantityButton from './components/UI/QuantityButton.vue'
import store from './store/store.js'


const app = createApp(App)
app.use(router)
app.use(store)
app.component('base-button',BaseButton)
app.component('base-card',BaseCard)
app.component('quantity-button',QuantityButton)
app.mount('#app')

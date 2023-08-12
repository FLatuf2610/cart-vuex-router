import { createStore } from 'vuex'
const store = createStore({
    state(){
        return {
            cart:{
                products:[],
                quantity:0,
                total:0
            },
            products:[
                {id:1,name:'Prod 1',price:100,desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex dolor, ipsa nam .'},
                {id:2,name:'Prod 2',price:70,desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex dolor, ipsa nam .'},
                {id:3,name:'Prod 3',price:170,desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex dolor, ipsa nam .'},
                {id:4,name:'Prod 4',price:45,desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex dolor, ipsa nam .'},
                {id:5,name:'Prod 5',price:20,desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex dolor, ipsa nam .'},
                {id:6,name:'Prod 6',price:300,desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex dolor, ipsa nam .'},
                {id:7,name:'Prod 7',price:175,desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex dolor, ipsa nam .'},
            ],
            
        };
    },

    mutations:{
        addToCart(state,id){
            const selectedProduct = state.products.find(product => product.id === id);
            const cartItem = state.cart.products.find(product => product.id === id);
            if (cartItem != undefined){
              cartItem.quantity+= 1;
              state.cart.quantity+=1;
              state.cart.total += cartItem.price;
            }
            else{
              const newItem = {name:selectedProduct.name,id:selectedProduct.id,price:selectedProduct.price,quantity:1};
              state.cart.products.push(newItem);
              state.cart.quantity++;
              state.cart.total += newItem.price;
            }
            
          },
          deleteFromCart(state,id){
            const selectedProduct = state.cart.products.find(product => product.id === id);
            state.cart.total -= selectedProduct.price * selectedProduct.quantity
            state.cart.quantity -= selectedProduct.quantity;
            const index = state.cart.products.indexOf(selectedProduct)
            state.cart.products.splice(index,1);
          },

          add1(state,id){
            const selectedProduct = state.cart.products.find(product => product.id === id);
            selectedProduct.quantity++;
            state.cart.quantity++;
            state.cart.total += selectedProduct.price
          },
          delete1(state,id){
            const selectedProduct = state.cart.products.find(product => product.id === id);
            selectedProduct.quantity--;
            state.cart.quantity--;
            state.cart.total -= selectedProduct.price
            if(selectedProduct.quantity == 0){
                const index = state.cart.products.indexOf(selectedProduct)
                state.cart.products.splice(index,1)
            }
          }
    },
    getters:{
        products(state){
            return state.products
        },
        cartProducts(state){
            return state.cart.products
        },
        total(state){
            return state.cart.total
        },
        cart(state){
            return state.cart
        },
        cartQty(state){
            return state.cart.quantity
        }
    },
    actions:{
        addToCart(context,payload){
            context.commit('addToCart',payload)
        },
        deleteFromCart(context,payload){
            context.commit('deleteFromCart', payload)
        },
        add1(context,payload){
            context.commit('add1',payload)
        },
        delete1(context,payload){
            context.commit('delete1',payload)
        }
    }
});

export default store
import axios from 'axios';
const url = "http://localhost:8080/";
export const inventory = new Map();
export const cart = new Map();

export function removeFromCart(id) {
   cart.delete(id)
}

export function incrementQtyInCart(id, increment = 1) {
   if(cart.has(id)) {
      const quantity = cart.get(id) + increment;
      cart.set(id, quantity)
   } else {
      cart.set(id, increment)
   }
}

export function decrementQtyInCart(id) {
   if(!cart.has(id)) {
      return 
   }
   
   const quantity = cart.get(id)
   
   if(quantity === 1) {
      cart.delete(id)
   } else {
      cart.set(id, quantity - 1)
   }
}

export async function getProducts() {
   return axios.get(url)
   .then(response => {
      for(const product of response.data) {
         inventory.set(product.id, product)
      }
     return response.data
   })
   .catch(error => {
      console.error(error)
      throw error
   })
}

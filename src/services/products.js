import axios from 'axios';
const url = "http://localhost:8080/demo/";
export async function getProducts() {
   return axios.get(url)
   .then(response => response.data)
   .catch(error => {
      console.error(error)
      throw error
   })
}

export let products = [];

export async function addToCart(item) {
   products.push(item);
   console.log(products)
}

export function removeFromCart(id) {
   const items = products.filter((item) => item.id !== id);
   products = items
   console.log(id)
}
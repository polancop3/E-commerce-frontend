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

export let cartProducts = [];

export async function handleAddToCart(item) {
   cartProducts.push(item);
   console.log(cartProducts)
}

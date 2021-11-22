import axios from 'axios';

export async function getProducts() {
   return axios.get('https://fakestoreapi.com/products?limit=6')
   .then(response => response.data)
   .catch(error => {
      console.error(error)
      throw error
   })
}

export async function addToCart(item) {
   // TODO - send post request to api when api is implemented
   console.log(item) 
}
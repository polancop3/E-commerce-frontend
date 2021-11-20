import axios from 'axios';

export async function getItems() {
   return axios.get('https://fakestoreapi.com/products?limit=1')
   .then(response => response.data)
   .catch(error => {
      console.error(error)
      throw error
   })
}
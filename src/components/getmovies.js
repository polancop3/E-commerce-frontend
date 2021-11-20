import axios from 'axios';

export async function getMovies() {
   return axios.get('https://fakestoreapi.com/products')
   .then(response => response.data)
   .catch(error => {
      console.error(error)
      throw error
   })
}
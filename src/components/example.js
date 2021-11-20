import React, {Component} from 'react';
import { getMovies } from './getmovies';
//bring data to fron end
//map through the data

class Cartitas extends Component {
    constructor(props){
        super(props);
        this.state = {
            movies: []
        };
        this.getProducts = this.getProducts.bind(this);
    }

    getProducts(){
        getMovies()
        .then(movies => {
            console.log(movies)
            this.setState({
                movies: movies
            })
        })
    }

    componentDidMount() {
       this.getProducts();
    }
    render(){
        return (
            <div className="Cartitas">
                {this.state.movies.map((movie,index) => <p key={index}>{movie.title}</p>)}
            </div>
        )

    }
}

export default Cartitas;
import React, {Component} from 'react';

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
                {this.state.movies.map((movie,index) =><p key={index}>{movie[0].title}</p>)}
            </div>
        )

    }
}

export default Cartitas;
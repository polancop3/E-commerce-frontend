import React, { Component } from 'react';
import Cards from './Cards';
import "./homeStyles.css";
export default class Home extends Component {
    render() {
        return (
        <div className="items-container">
            <Cards/>
        </div>
        )
    }
}
import React, { Component } from 'react';
import MovieCard from "./components/MovieCard";
import MovieList from "./components/MovieList";
import Filter from './components/Filter';


export default class App extends Component {

    constructor() {
        super();

        this.state = {
            title: 'React Movie Cards'
        };
    }

    render() {
        return (
            <div>
                <div className="mt-5">
                    <MovieCard />
                    <MovieList />
                    <Filter />
                </div>
            </div>
        );
    }
}



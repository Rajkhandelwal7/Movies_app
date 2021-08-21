import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import NavBar from './components/navBar/NavBar'
import MoviesList from './container/moviesList'

export default class Navigator extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/" component={MoviesList}></Route>
                    {/* <Route path="/Movies" component={MoviesList} ></Route> */}
                    <Route path="/About" component={About}></Route>
                    <Route path="/Contact" component={Contact}></Route>
                </Switch>
            </div>
        )
    }
}

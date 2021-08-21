import React, { Component } from 'react'
import { Link}  from 'react-router-dom';

import './NavBarButtons.css'
import MoviesList from '../../container/moviesList';

export default class NavBarButtons extends Component {
    constructor(props){
        super(props);
        this.state={};
    }
  
    render() {
        let data="/"+this.props.items
        return (
             <div className="navbar-buttons">
                <Link className="link-button" to={data}>
                {this.props.items}
                </Link>
                
            </div>
        )
    }
}

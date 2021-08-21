import React, {Component} from 'react'
import NavBarButtons from '../navBarbuttons/NavBarButtons'
import './NavBar.css'

export default class NavBar extends Component {
    render() {
        return (
            <div className="navbar">
            <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtazJPwxRY-KG8k5oNqlzUAcFKcPrMWhkfZQ&usqp=CAU" alt="" />
            <div className="app-name">
                MOVIES APP
            </div>
                <div className="nav-buttons">
                    <NavBarButtons items={"Movies"}/>
                    <NavBarButtons items={"About"}/>
                    <NavBarButtons items={"Contact"}/>
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react'
import './sideBar.css';
import SideBarButtons from '../sideBarbuttons/sideBarButtons';

export default class SideBar extends Component {
    constructor(props){
        super(props)
        this.state={};
    }
    render() {
        let sidebaraaray=[];
        let arr=["All Genres","Action","Comedy","Thriller","Romantic","Fictional","Drama","Life Lesson"];
        for(let i=0;i<arr.length;i++){
            arr[i].toLocaleUpperCase();
            sidebaraaray.push(<div className="sidebar-buttons" onClick={()=>{
                this.props.changeGenre(arr[i])}
            }>{arr[i]}</div>)
        }
        return (
            <div className="sideBar">
                
                {sidebaraaray}
            </div>
        )
    }
}

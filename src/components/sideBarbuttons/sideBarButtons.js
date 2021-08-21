import React, {Component} from "react";
import "./sideBarButtons.css";

export default class SideBarButtons extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="sidebar-buttons">
                {this.props.text}
            </div>
        );
    }
}

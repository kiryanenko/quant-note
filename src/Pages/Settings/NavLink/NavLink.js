import React, { Component } from 'react';

class NavLink extends Component {
    render() {
        return (
            <a className={"nav-link " + (this.props.active ? "active" : '')} data-toggle="pill" role="tab"
               href="#" onClick={this.props.onClick}>{this.props.children}</a>
        )
    }
}

export default NavLink;

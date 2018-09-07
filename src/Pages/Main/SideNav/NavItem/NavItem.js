import React, { Component } from 'react';
import { Fa, Collapse } from 'mdbreact';
import './NavItem.css';

class NavItem extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);

        this.state = {
            collapse: false,
        };
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    render() {
        if (this.props.children) {
            return (
                <li>
                    <a href={this.props.href} onClick={this.toggle}
                       className="d-flex align-items-center justify-content-between">
                        <span><span className="angle"><Fa icon="angle-down"/></span><Fa icon={this.props.icon}/> {this.props.text}</span>
                        <small className="grey-text">{this.props.count}</small>
                    </a>
                    <Collapse isOpen={this.state.collapse}>
                        <ul className="collapse list-unstyled show" id="homeSubmenu">{this.props.children}</ul>
                    </Collapse>
                </li>
            )
        } else {
            return (
                <li>
                    <a href={this.props.href} className="d-flex align-items-center justify-content-between">
                        <span><span className="angle" /><Fa icon={this.props.icon}/> {this.props.text}</span>
                        <small className="grey-text">{this.props.count}</small>
                    </a>
                </li>
            )
        }
    }
}

export default NavItem;

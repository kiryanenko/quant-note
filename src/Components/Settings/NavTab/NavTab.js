import React, { Component } from 'react';
import {Animation} from 'mdbreact'

class NavTab extends Component {
    render() {
        return (
            <div className={"tab-pane fade" + (this.props.active ? " show active" : '')} role="tabpanel">
                <Animation type="fadeIn" duration="500ms">
                {this.props.children}
                </Animation>
            </div>
        )
    }
}

export default NavTab;

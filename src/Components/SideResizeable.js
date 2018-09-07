import React, { Component } from 'react';
import Resizable from 're-resizable'

const { remote } = window.require('electron');
const settings = remote.require('electron-settings');

class SideResizeable extends Component {
    constructor(props) {
        super(props);

        this.width = settings.get(this.props.widthSettingsKey);

        this.onWidthChanged = this.onWidthChanged.bind(this)
    }

    onWidthChanged(e, direction, ref, d) {
        this.width += d.width;
        this.setState({width: this.width});
        settings.set(this.props.widthSettingsKey, this.width, {prettify: true})
    }

    render() {
        return (
            <Resizable
                defaultSize={{width: this.width}}
                enable={{top: false, right: true, bottom: false, left: false,
                    topRight: false, bottomRight: false, bottomLeft: false, topLeft: false}}
                onResizeStop={this.onWidthChanged}
                minWidth={this.props.minWidth}
            >
                {this.props.children}
            </Resizable>
        );
    }
}

export default SideResizeable;

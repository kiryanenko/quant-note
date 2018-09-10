import React, { Component } from 'react';
import {Fa, Badge, Tooltip} from 'mdbreact'
import Settings from '../../Settings/Settings'
import SideResizeable from '../../../Components/SideResizeable'
import {initI18n} from '../../../Components/libs/locale'
import './SideNav.css';
import FolderList from "./FolderList";
import TagList from "./TagList";

const { remote } = window.require('electron');
const settings = remote.require('electron-settings');

class SideNav extends Component {
    constructor(props) {
        super(props);

        this.state = {
            navType: settings.get('Main.SideNav.navType')
        };

        initI18n(this);
    }

    setNavType(type) {
        settings.set('Main.SideNav.navType', type);
        this.setState({navType: type});
    }

    render() {
        return (
            <SideResizeable widthSettingsKey="sideNavWidth" minWidth={190}>
                <nav id="SideNav" className="d-flex flex-column p-0">
                    <div className="d-flex justify-content-between p-2">
                        <div className="d-flex ml-2">
                            <Tooltip placement="bottom" component="a" tooltipContent={this.state.i18n.__('Notepads')}>
                                <a onClick={this.setNavType.bind(this, 'folders')}><Fa icon="book" size="2x"/></a>
                            </Tooltip>
                            <Tooltip placement="bottom" component="a" tooltipContent={this.state.i18n.__('Tags')}
                                     componentClass="mx-3">
                                <a onClick={this.setNavType.bind(this, 'tags')}><Fa icon="tags" size="2x"/></a>
                            </Tooltip>
                        </div>
                        <Tooltip placement="bottom" component="a" tooltipContent={this.state.i18n.__('Settings')}>
                            <a onClick={Settings.open}><Fa icon="sliders" size="2x"/></a>
                        </Tooltip>
                    </div>

                    <div className="scroll flex-fill d-flex flex-column mb-0">
                        <FolderList hidden={this.state.navType !== 'folders'} />
                        <TagList hidden={this.state.navType !== 'tags'}/>
                    </div>
                </nav>
            </SideResizeable>
        );
    }
}

export default SideNav;

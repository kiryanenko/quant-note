import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import NavItem from './NavItem/NavItem'
import {initI18n} from '../../../Components/libs/locale'
import './SideNav.css';


class FolderList extends Component {
    constructor(props) {
        super(props);

        initI18n(this);

        this.onRightClick = this.onRightClick.bind(this);
    }

    onRightClick(e) {
        return false;
    }

    render() {
        return (
            <ul className="list-unstyled components flex-fill h-100"
                hidden={this.props.hidden}
                onContextMenu={this.onRightClick}
            >
                <NavItem text={this.state.i18n.__('All notes')} icon="dashboard" href="#" count={321}/>
                <NavItem text={this.state.i18n.__('Favorites')} icon="star" href="#" count={12}/>
                <br/>

                <NavItem text="Хранилище 1" icon="archive" href="#" count={123}>
                    <NavItem text="Папка 1" href="#" count={123}>
                        <NavItem text="Подпапка 1" href="#" count={0}/>
                        <NavItem text="Подпапка 2" href="#" count={13}>
                            <NavItem text="Папка 2.1" href="#" count={1}/>
                            <NavItem text="Папка 2.2" href="#" count={12}/>
                        </NavItem>
                        <NavItem text="Подпапка 3" href="#" count={123}/>
                        <NavItem text="Подпапка 4" href="#" count={123}/>
                        <NavItem text="Подпапка 5" href="#" count={123}>
                            <NavItem text="Папка 5.1" href="#" count={123}/>
                            <NavItem text="Папка 5.2" href="#" count={123}/>
                        </NavItem>
                    </NavItem>

                    <NavItem text="Папка 2" href="#" count={123}/>
                    <NavItem text="Папка 3" href="#" count={123}/>
                </NavItem>
                <NavItem text="Хранилище 2" icon="archive" href="#" count={123}/>
                <NavItem text="Хранилище 3" icon="archive" href="#" count={123}/>
            </ul>
        );
    }
}

export default FolderList;

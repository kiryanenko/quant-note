import React, { Component } from 'react';
import {Fa, Badge, Tooltip} from 'mdbreact'
import NavItem from './NavItem/NavItem'
import Settings from '../../Settings/Settings'
import './SideNav.css';

class SideNav extends Component {
    render() {
        return (
            <nav id="SideNav" className="d-flex flex-column col-2 p-0">
                <div className="d-flex justify-content-between p-2">
                    <div className="d-flex ml-2">
                        <Tooltip placement="bottom" component="a" tooltipContent="Блокноты">
                            <a href="#"><Fa icon="book" size="2x"/></a>
                        </Tooltip>
                        <Tooltip placement="bottom" component="a" tooltipContent="Метки" componentClass="mx-3">
                            <a href="#"><Fa icon="tags" size="2x"/></a>
                        </Tooltip>
                    </div>
                    <Tooltip placement="bottom" component="a" tooltipContent="Настройки">
                        <a onClick={Settings.open}><Fa icon="sliders" size="2x"/></a>
                    </Tooltip>
                </div>

                <div className="scroll flex-grow-1 mb-0">
                    <ul className="list-unstyled components">
                        <NavItem text="Все записи" icon="dashboard" href="#" count={321}/>
                        <NavItem text="Избранное" icon="star" href="#" count={12}/>
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
                </div>
            </nav>
        );
    }
}

export default SideNav;

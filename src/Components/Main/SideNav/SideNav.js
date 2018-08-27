import React, { Component } from 'react';
import './SideNav.css';
import {Fa, Badge, Tooltip} from 'mdbreact'

class SideNav extends Component {
    render() {
        return (
            <nav id="SideNav" className="d-flex flex-column col-2 p-0">
                <div className="d-flex justify-content-between p-2">
                    <div className="d-flex">
                        <Tooltip placement="bottom" component="a" tooltipContent="Блокноты">
                            <a href="#"><Fa icon="book" size="2x"/></a>
                        </Tooltip>
                        <Tooltip placement="bottom" component="a" tooltipContent="Метки" componentClass="mx-3">
                            <a href="#"><Fa icon="tags" size="2x"/></a>
                        </Tooltip>
                    </div>
                    <Tooltip placement="bottom" component="a" tooltipContent="Настройки">
                        <a href="#"><Fa icon="sliders" size="2x"/></a>
                    </Tooltip>
                </div>

                <div className="scroll flex-grow-1 mb-0">
                    <ul className="list-unstyled components">
                        <li><a href="#">Все записи</a></li>
                        <li><a href="#">Избранное</a></li>
                        <br/>
                        <li>
                            <a href="#" data-toggle="collapse" aria-expanded="true"
                               className="dropdown-toggle">Хранилище 1</a>
                            <ul className="collapse list-unstyled show" id="homeSubmenu">
                                <li>
                                    <a href="#" data-toggle="collapse" aria-expanded="true"
                                       className="dropdown-toggle">Папка 1</a>
                                    <ul className="collapse list-unstyled show" id="homeSubmenu">
                                        <li><a href="#">Подпапка 1</a></li>
                                        <li>
                                            <a href="#" data-toggle="collapse" aria-expanded="true"
                                               className="dropdown-toggle">Подпапка 2</a>
                                            <ul className="collapse list-unstyled show" id="homeSubmenu">
                                                <li><a href="#">Папка 2.1</a></li>
                                                <li><a href="#">Папка 2.2</a></li>
                                                <li><a href="#">Папка 2.3</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#">Подпапка 3</a></li>
                                        <li><a href="#">Подпапка 4</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Папка 2</a></li>
                                <li><a href="#">Папка 3</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Хранилище 2</a></li>
                        <li><a href="#">Хранилище 3</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default SideNav;

import React, { Component } from 'react';
import './SideNav.css';
import { Fa, Badge } from 'mdbreact'

class SideNav extends Component {
    render() {
        return (
            <nav id="sidebar">
                <ul className="list-unstyled components">
                    <li><a href="#">Все записи</a></li>
                    <li><a href="#">Избранное</a></li>
                    <br/>

                    <li className="active">
                        <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="true"
                           className="dropdown-toggle">Хранилища</a>
                        <ul className="collapse list-unstyled show" id="homeSubmenu">
                            <li>
                                <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="true"
                                   className="dropdown-toggle">Хранилище 1</a>
                                <ul className="collapse list-unstyled show" id="homeSubmenu">
                                    <li>
                                        <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="true"
                                           className="dropdown-toggle">Папка 1</a>
                                        <ul className="collapse list-unstyled show" id="homeSubmenu">
                                            <li><a href="#">Подпапка 1</a></li>
                                            <li>
                                                <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="true"
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
                    </li>
                    <br/>

                    <li className="active">
                        <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="true"
                           className="dropdown-toggle">Метки</a>
                        <ul className="collapse list-unstyled show" id="homeSubmenu">
                            <input className="form-control form-control-sm" type="text" placeholder="Найти метку" aria-label="Search"/>

                            <section>
                                <Badge color="default">Выбранная метка 1 <Fa icon="close"/></Badge>&nbsp;
                                <Badge color="primary">Метка 2 <Fa icon="close"/></Badge>&nbsp;
                                <Badge color="success">Метка 3 <Fa icon="close"/></Badge>&nbsp;
                            </section>


                            <li><a href="#">Метка 2</a></li>
                            <li><a href="#">Метка 3</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default SideNav;

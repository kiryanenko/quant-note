import React, { Component } from 'react';
import NavItem from './NavItem/NavItem'
import {initI18n} from '../../../Components/libs/locale'
import './SideNav.css';


class TagList extends Component {
    constructor(props) {
        super(props);

        initI18n(this);
    }

    render() {
        return (
            <ul className="list-unstyled components" hidden={this.props.hidden}>
                <NavItem text="Метка 1" href="#" count={321}/>
                <NavItem text="Метка 2" href="#" count={12}/>
                <NavItem text="Метка 3" href="#" count={123}/>
                <NavItem text="Метка 4" href="#" count={123}/>
            </ul>
        );
    }
}

export default TagList;

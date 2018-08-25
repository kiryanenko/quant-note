import React, { Component } from 'react';
import SideNav from './SideNav/SideNav'
import NoteList from './NoteList/NoteList'
import './Main.css';

class Main extends Component {
    render() {
        return (
            <div className="h-100 wrapper">
               <SideNav />
               <NoteList />
            </div>
        );
    }
}

export default Main;

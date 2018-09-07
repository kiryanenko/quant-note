import React, { Component } from 'react';
import SideNav from './SideNav/SideNav'
import NoteListBar from './NoteListBar/NoteListBar'
import './Main.css';
import NoteDetail from "./NoteDetail/NoteDetail";

class Main extends Component {
    render() {
        return (
            <div className="container-fluid h-100 p-0">
                <div className="h-100 d-flex">
                    <SideNav/>
                    <NoteListBar/>
                    <NoteDetail/>
                </div>
            </div>
        );
    }
}

export default Main;

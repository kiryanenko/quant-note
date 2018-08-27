import React, { Component } from 'react';
import SideNav from './SideNav/SideNav'
import NoteListBar from './NoteListBar/NoteListBar'
import './Note.css';

class Note extends Component {
    render() {
        return (
            <div className="container-fluid h-100">
                <div className="row h-100 d-flex">
                    <SideNav />
                    <NoteListBar />
                </div>
            </div>
        );
    }
}

export default Note;

import React, { Component } from 'react';
import './NoteDetail.css';
import {Badge, Fa, Input, ListGroup, ListGroupItem, Tooltip} from "mdbreact";

class NoteDetail extends Component {
    render() {
        return (
            <div id="NoteDetail" className="d-flex flex-column col-7 h-100 p-0">
                <div id="NoteDetailHeader" className="p-2">
                    <div className="d-flex justify-content-between align-items-center">
                        <h2><Fa icon="sticky-note"/> Название заметки</h2>
                        <div className="d-flex">
                            <Tooltip placement="bottom" component="a" tooltipContent="Добавить в избранное"
                                     componentClass="mr-2">
                                <a href="#"><Fa icon="star-o" size="lg"/></a>
                            </Tooltip>
                            <Tooltip placement="bottom" component="a" tooltipContent="Удалить"
                                     componentClass="mr-2">
                                <a href="#"><Fa icon="trash" size="lg"/></a>
                            </Tooltip>
                            <a href="#"><Fa icon="bars" size="lg"/></a>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between  align-items-center">
                        <small className="text-muted">
                            <a href="#"><Fa icon="folder"/> / Хранилище 1 / Папка 1</a>
                        </small>
                        <small>
                            <span className="text-muted"><Fa icon="link"/> Источник:</span> <a href="#">http://source.com/source</a>
                        </small>
                    </div>
                    <div className="d-flex align-items-center">
                        <Badge color="default">Метка 1 <Fa icon="close"/></Badge>&nbsp;
                        <Badge color="primary">Метка 2 <Fa icon="close"/></Badge>&nbsp;
                        <Badge color="success">Метка 3 <Fa icon="close"/></Badge>&nbsp;
                        <input className="form-control form-control-sm w-25" placeholder="Add tag"/>
                    </div>
                </div>

                <div className="NoteList scroll flex-grow-1">

                </div>
            </div>
        );
    }
}

export default NoteDetail;

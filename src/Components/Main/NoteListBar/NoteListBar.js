import React, { Component } from 'react';
import './NoteListBar.css';
import {Fa, Tooltip, Input, ListGroup, ListGroupItem, Badge} from 'mdbreact'


class NoteListBar extends Component {
    render() {
        return (
            <div id="NoteListBar" className="d-flex flex-column col-3 h-100 p-0">
                <div className="p-2">
                    <div className="d-flex justify-content-between align-items-center">
                        <Input hint="Search" type="text" containerClass="my-0 w-100"/>
                        <Tooltip placement="bottom" component="a" tooltipContent="New note" componentClass="ml-3">
                            <a href="#"><Fa icon="edit" size="2x"/></a>
                        </Tooltip>
                    </div>
                    <div>
                        <small className="text-muted">
                            <a href="#">/</a> <a href="#">Хранилище 1</a> / <a href="#">Папка 1</a>
                        </small>
                    </div>
                    <div>
                        <Badge color="default">Выбранная метка 1 <Fa icon="close"/></Badge>&nbsp;
                        <Badge color="primary">Метка 2 <Fa icon="close"/></Badge>&nbsp;
                        <Badge color="success">Метка 3 <Fa icon="close"/></Badge>&nbsp;
                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-2">
                        <select className="form-control form-control-sm">
                            <option>По дате изменения</option>
                            <option>По названию</option>
                        </select>
                        <div className="d-flex ml-3">
                            <a href="#"><Fa icon="th-list" size="lg"/></a>
                            &nbsp;
                            <a href="#"><Fa icon="align-justify" size="lg"/></a>
                        </div>
                    </div>
                </div>

                <div className="NoteList scroll flex-grow-1">
                    <ListGroup>
                        <ListGroupItem active href="#">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1">List group item heading</h5>
                                <small>3 days ago</small>
                            </div>
                            <p class="mb-0">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                            <small>/ Хранилеще 1 / Папка 1 </small>
                            <p class="mb-0">
                                <Badge color="default">Метка 1 <Fa icon="close"/></Badge>&nbsp;
                                <Badge color="primary">Метка 2 <Fa icon="close"/></Badge>&nbsp;
                                <Badge color="success">Метка 3 <Fa icon="close"/></Badge>&nbsp;
                            </p>
                        </ListGroupItem>
                        <ListGroupItem hover href="#">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1">List group item heading</h5>
                                <small>3 days ago</small>
                            </div>
                            <p class="mb-0">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                            <small>/ Хранилеще 1 / Папка 1 </small>
                            <p class="mb-0">
                                <Badge color="default">Метка 1 <Fa icon="close"/></Badge>&nbsp;
                                <Badge color="primary">Метка 2 <Fa icon="close"/></Badge>&nbsp;
                                <Badge color="success">Метка 3 <Fa icon="close"/></Badge>&nbsp;
                            </p>
                        </ListGroupItem>
                        <ListGroupItem hover href="#">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1">List group item heading</h5>
                                <small>3 days ago</small>
                            </div>
                            <p class="mb-0">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                            <small>/ Хранилеще 1 / Папка 1 </small>
                            <p class="mb-0">
                                <Badge color="default">Метка 1 <Fa icon="close"/></Badge>&nbsp;
                                <Badge color="primary">Метка 2 <Fa icon="close"/></Badge>&nbsp;
                                <Badge color="success">Метка 3 <Fa icon="close"/></Badge>&nbsp;
                            </p>
                        </ListGroupItem>
                    </ListGroup>
                </div>
            </div>
        );
    }
}

export default NoteListBar;

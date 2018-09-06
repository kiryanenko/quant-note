import React, { Component } from 'react';
import './NoteListBar.css';
import {Fa, Tooltip, Input, ListGroup, ListGroupItem, Badge} from 'mdbreact'
import {initI18n} from '../../Utils/locale'


class NoteListBar extends Component {
    constructor(props) {
        super(props);

        initI18n(this);
    }

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
                            <a href="#"><Fa icon="folder"/> /</a> <a href="#">Хранилище 1 /</a> <a href="#">Папка 1</a>
                        </small>
                    </div>
                    <div>
                        <Badge color="default">Выбранная метка 1 <Fa icon="close"/></Badge>&nbsp;
                        <Badge color="primary">Метка 2 <Fa icon="close"/></Badge>&nbsp;
                        <Badge color="success">Метка 3 <Fa icon="close"/></Badge>&nbsp;
                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-2">
                        <select className="form-control form-control-sm">
                            <option>{this.state.i18n.__('By modification date')}</option>
                            <option>{this.state.i18n.__('By title')}</option>
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
                                <h5 class="mb-1"><Fa icon="sticky-note"/> List group item heading</h5>
                                <small>3 days ago</small>
                            </div>
                            <p class="mb-0">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                            <small>/ Хранилеще 1 / Папка 1 / file.md</small>
                            <p class="mb-0">
                                <Badge color="default">Метка 1 <Fa icon="close"/></Badge>&nbsp;
                                <Badge color="primary">Метка 2 <Fa icon="close"/></Badge>&nbsp;
                                <Badge color="success">Метка 3 <Fa icon="close"/></Badge>&nbsp;
                            </p>
                        </ListGroupItem>
                        <ListGroupItem hover href="#">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1"><Fa icon="sticky-note"/> List group item heading</h5>
                                <small>3 days ago</small>
                            </div>
                            <p class="mb-0">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                            <div className="d-flex align-items-end justify-content-between">
                                <div>
                                    <small>/ Хранилеще 1 / Папка 1 / file.md</small>
                                    <p className="mb-0">
                                        <Badge color="default">Метка 1 <Fa icon="close"/></Badge>&nbsp;
                                        <Badge color="primary">Метка 2 <Fa icon="close"/></Badge>&nbsp;
                                        <Badge color="success">Метка 3 <Fa icon="close"/></Badge>&nbsp;
                                    </p>
                                </div>
                                <span className="amber-text"><Fa icon="star"/></span>
                            </div>
                        </ListGroupItem>
                        <ListGroupItem hover href="#">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1"><Fa icon="file-pdf-o"/> List group item heading</h5>
                                <small>3 days ago</small>
                            </div>
                            <p class="mb-0">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                            <small>/ Хранилеще 1 / Папка 1 / file.pdf</small>
                            <p class="mb-0">
                                <Badge color="default">Метка 1 <Fa icon="close"/></Badge>&nbsp;
                                <Badge color="primary">Метка 2 <Fa icon="close"/></Badge>&nbsp;
                                <Badge color="success">Метка 3 <Fa icon="close"/></Badge>&nbsp;
                            </p>
                        </ListGroupItem>
                        <ListGroupItem hover href="#">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1"><Fa icon="file-word-o"/> List group item heading</h5>
                                <small>3 days ago</small>
                            </div>
                            <p class="mb-0">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                            <small>/ Хранилеще 1 / Папка 1 / file.docx</small>
                            <p class="mb-0">
                                <Badge color="default">Метка 1 <Fa icon="close"/></Badge>&nbsp;
                                <Badge color="primary">Метка 2 <Fa icon="close"/></Badge>&nbsp;
                                <Badge color="success">Метка 3 <Fa icon="close"/></Badge>&nbsp;
                            </p>
                        </ListGroupItem>
                        <ListGroupItem hover href="#">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1"><Fa icon="file-powerpoint-o"/> List group item heading</h5>
                                <small>3 days ago</small>
                            </div>
                            <p class="mb-0">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                            <small>/ Хранилеще 1 / Папка 1 / file.pptx</small>
                            <p class="mb-0">
                                <Badge color="default">Метка 1 <Fa icon="close"/></Badge>&nbsp;
                                <Badge color="primary">Метка 2 <Fa icon="close"/></Badge>&nbsp;
                                <Badge color="success">Метка 3 <Fa icon="close"/></Badge>&nbsp;
                            </p>
                        </ListGroupItem>
                        <ListGroupItem hover href="#">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1"><Fa icon="file-text-o"/> List group item heading</h5>
                                <small>3 days ago</small>
                            </div>
                            <p class="mb-0">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                            <small>/ Хранилеще 1 / Папка 1 / file.txt</small>
                            <p class="mb-0">
                                <Badge color="default">Метка 1 <Fa icon="close"/></Badge>&nbsp;
                                <Badge color="primary">Метка 2 <Fa icon="close"/></Badge>&nbsp;
                                <Badge color="success">Метка 3 <Fa icon="close"/></Badge>&nbsp;
                            </p>
                        </ListGroupItem>
                        <ListGroupItem hover href="#">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1"><Fa icon="globe"/> List group item heading</h5>
                                <small>3 days ago</small>
                            </div>
                            <p class="mb-0">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                            <small>/ Хранилеще 1 / Папка 1 / file.html</small>
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

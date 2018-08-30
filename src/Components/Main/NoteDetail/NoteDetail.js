import React, { Component } from 'react';
import './NoteDetail.css';
import {Badge, Fa, Input, ListGroup, ListGroupItem, Tooltip, Popover, PopoverBody} from "mdbreact";
import Switch from 'rc-switch';

class NoteDetail extends Component {
    render() {
        return (
            <div id="NoteDetail" className="container-fluid d-flex flex-column col-7 h-100">
                <div id="NoteDetailHeader" className="p-2">
                    <div className="d-flex justify-content-between align-items-top">
                        <h2><Fa icon="sticky-note"/> Название заметки</h2>
                        <div className="d-flex">
                            <Switch unCheckedChildren={(<Fa icon="window-maximize"/>)}
                                    checkedChildren={(<Fa icon="columns"/>)}
                                    className="mr-3" checked/>
                            <Tooltip placement="bottom" component="a" tooltipContent="Удалить"
                                     componentClass="mr-5">
                                <Fa icon="arrows-alt" size="lg"/>
                            </Tooltip>

                            <Tooltip placement="bottom" component="a" tooltipContent="Добавить в избранное"
                                     componentClass="mr-3">
                                <Fa icon="star-o" size="lg"/>
                            </Tooltip>
                            <Tooltip placement="bottom" component="a" tooltipContent="Удалить"
                                     componentClass="mr-3">
                                <Fa icon="trash" size="lg"/>
                            </Tooltip>

                            <Popover component="a" placement="bottom"
                                     popoverBody={(<Fa icon="info-circle" size="lg"/>)}>
                                <PopoverBody>
                                    <div className="px-4">
                                        <span>Aug 26, 2018 20:30</span><br/>
                                        <small className="text-muted">Дата изменения</small><br/>


                                        <span>Aug 26, 2018 20:30</span><br/>
                                        <small className="text-muted">Дата создания</small>
                                    </div>
                                    <div className="dropdown-divider"/>

                                    <div className="row text-center">
                                        <div className="col">
                                            <span>1234</span><br/>
                                            <small>Слов</small>
                                        </div>
                                        <div className="col">
                                            <span>12345</span><br/>
                                            <small>Букв</small>
                                        </div>
                                    </div>
                                    <div className="dropdown-divider"/>

                                    <a className="dropdown-item" href="#">Открыть в другом приложениии</a>
                                    <a className="dropdown-item" href="#">Показать в папке</a>
                                    <div className="dropdown-divider"/>

                                    <div className="d-flex justify-content-around text-center">
                                        <div className="m-2">
                                            <Fa icon="file-pdf-o" size="4x"/><br/>
                                            <small>.pdf</small>
                                        </div>
                                        <div className="m-2">
                                            <Fa icon="html5" size="4x"/><br/>
                                            <small>.html</small>
                                        </div>
                                        <div className="m-2">
                                            <Fa icon="print" size="4x"/><br/>
                                            <small>Print</small>
                                        </div>
                                        <div className="m-2">
                                            <Fa icon="share-alt" size="4x"/><br/>
                                            <small>Share</small>
                                        </div>
                                    </div>
                                </PopoverBody>
                            </Popover>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between  align-items-center">
                        <small className="text-muted">
                            <a href="#"><Fa icon="folder"/> / Хранилище 1 / Папка 1</a>
                        </small>
                        <small>
                            <span className="text-muted"><Fa icon="external-link"/> Источник:</span> <a href="#">http://source.com/source</a>
                        </small>
                    </div>
                    <div className="d-flex align-items-center">
                        <Badge color="default">Метка 1 <Fa icon="close"/></Badge>&nbsp;
                        <Badge color="primary">Метка 2 <Fa icon="close"/></Badge>&nbsp;
                        <Badge color="success">Метка 3 <Fa icon="close"/></Badge>&nbsp;
                        <input className="form-control form-control-sm w-25" placeholder="Add tag"/>
                    </div>
                </div>


                    <div className="row flex-grow-1 h-100">
                        <div className="col h-100">
                        <textarea className="form-control h-100">

                        </textarea>
                        </div>

                        <div className="col scroll">
                            <h1>Превью заметки</h1>
                            <p>Содержимое заметки</p>
                        </div>
                    </div>
            </div>
        );
    }
}

export default NoteDetail;

import React, { Component } from 'react';
import './NoteList.css';
import { Fa, Tooltip, Input, ListGroup, ListGroupItem } from 'mdbreact'


class NoteList extends Component {
    render() {
        return (
            <div className="NoteList col-3 h-100 p-0">
                <div className="p-2">
                    <div className="row">
                        <div className="col-10">
                            <Input hint="Search" type="text" containerClass="my-0"/>
                        </div>
                        <div className="col-2">
                            <Tooltip placement="bottom" component="a" tooltipContent="New note">
                                <a href="#"><Fa icon="edit" size="2x"/></a>
                            </Tooltip>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-9">
                            <select className="form-control form-control-sm" id="exampleFormControlSelect2">
                                <option>По дате изменения</option>
                                <option>По названию</option>
                            </select>
                        </div>
                        <div className="col-3">
                            <a href="#"><Fa icon="th-list" size="lg"/></a>
                            &nbsp;
                            <a href="#"><Fa icon="align-justify" size="lg"/></a>
                        </div>
                    </div>
                </div>

                <ListGroup>
                    <ListGroupItem active href="#">
                        <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1">List group item heading</h5>
                            <small>3 days ago</small>
                        </div>
                        <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                        <small>Donec id elit non mi porta.</small>
                    </ListGroupItem>
                    <ListGroupItem hover href="#">
                        <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1">List group item heading</h5>
                            <small class="text-muted">3 days ago</small>
                        </div>
                        <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                        <small class="text-muted">Donec id elit non mi porta.</small>
                    </ListGroupItem>
                    <ListGroupItem hover href="#">
                        <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1">List group item heading</h5>
                            <small class="text-muted">3 days ago</small>
                        </div>
                        <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                        <small class="text-muted">Donec id elit non mi porta.</small>
                    </ListGroupItem>
                </ListGroup>
            </div>
        );
    }
}

export default NoteList;

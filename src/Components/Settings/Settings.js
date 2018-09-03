import React, { Component } from 'react';
import NavLink from './NavLink/NavLink'
import NavTab from './NavTab/NavTab'

const { remote } = window.require('electron');


class Settings extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tab: 'basic',
        };
    }

    static open() {
        let child = new remote.BrowserWindow({parent: remote.getCurrentWindow(), modal: true});
        child.loadURL('http://localhost:3000/settings');
    }

    componentDidMount() {
        document.title = 'Quant Note - Settings';
    }

    setTab(tab) {
        this.state.tab = tab;
    }

    render() {
        return (
            <div className="container-fluid h-100 py-3">
                <div className="row h-100">
                    <div className="col-3">
                        <div className="nav flex-column nav-pills" role="tablist" aria-orientation="vertical">
                            <NavLink active={this.state.tab === 'basic'} onClick={this.setTab.bind(this, 'basic')}>
                                Basic</NavLink>
                            <NavLink active={this.state.tab === 'about'} onClick={this.setTab.bind(this, 'about')}>
                                About</NavLink>
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="tab-content" id="v-pills-tabContent">
                            <NavTab active={this.state.tab === 'basic'}>
                                {/* TODO */}
                                <h1>Basic</h1>
                                Cillum ad ut irure tempor velit nostrud occaecat ullamco aliqua anim Lorem sint. Veniam sint duis incididunt do esse magna mollit excepteur laborum qui. Id id reprehenderit sit est eu aliqua occaecat quis et velit excepteur laborum mollit dolore eiusmod. Ipsum dolor in occaecat commodo et voluptate minim reprehenderit mollit pariatur. Deserunt non laborum enim et cillum eu deserunt excepteur ea incididunt minim occaecat.
                            </NavTab>
                            <NavTab active={this.state.tab === 'about'}>
                                <h1>Quant Note</h1>
                                {/* TODO */}
                                Fugiat id quis dolor culpa eiusmod anim velit excepteur proident dolor aute qui magna. Ad proident laboris ullamco esse anim Lorem Lorem veniam quis Lorem irure occaecat velit nostrud magna nulla. Velit et et proident Lorem do ea tempor officia dolor. Reprehenderit Lorem aliquip labore est magna commodo est ea veniam consectetur.
                            </NavTab>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Settings;

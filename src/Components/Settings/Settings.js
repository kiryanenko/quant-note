import React, { Component } from 'react';
import NavLink from './NavLink/NavLink'
import NavTab from './NavTab/NavTab'

const { remote } = window.require('electron');
const i18n = remote.require('./src/libs/i18n');
const settings = remote.require('electron-settings');


class Settings extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tab: 'basic',
            language: i18n.getLocale()
        };

        this.onLanguageChange = this.onLanguageChange.bind(this);
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

    onLanguageChange(event) {
        let locale = event.target.value;
        this.setState({language: locale});
        i18n.setLocale(locale);
        settings.set('locale', locale, {prettify: true})
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
                                <div className="form-group row">
                                    <label className="col-3 col-form-label">Language</label>
                                    <div className="col-9">
                                        <select className="form-control" value={this.state.language}
                                                onChange={this.onLanguageChange}>
                                            <option value="en">English</option>
                                            <option value="ru">Русский</option>
                                        </select>
                                    </div>
                                </div>
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

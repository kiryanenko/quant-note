import React, { Component } from 'react';
import NavLink from './NavLink/NavLink'
import NavTab from './NavTab/NavTab'
import {initI18n} from '../../Components/libs/locale'

const { remote } = window.require('electron');
const settings = remote.require('electron-settings');


class Settings extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tab: 'basic',
            editorTheme: settings.get('editorTheme'),
        };

        initI18n(this);

        this.onLanguageChange = this.onLanguageChange.bind(this);
        this.onEditorThemeChange = this.onEditorThemeChange.bind(this);
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
        settings.set('locale', locale, {prettify: true});
        this.state.i18n.setLocale(locale);
    }

    onEditorThemeChange(event) {
        let theme = event.target.value;
        settings.set('editorTheme', theme);
        this.setState({editorTheme: theme});
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
                                    <label className="col-3 col-form-label">{this.state.i18n.__('Language')}</label>
                                    <div className="col-9">
                                        <select className="form-control" value={this.state.i18n.getLocale()}
                                                onChange={this.onLanguageChange}>
                                            <option value="en">English</option>
                                            <option value="ru">Русский</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-3 col-form-label">{this.state.i18n.__('Editor theme')}</label>
                                    <div className="col-9">
                                        <select className="form-control" value={this.state.editorTheme}
                                                onChange={this.onEditorThemeChange}>
                                            {{/* FIXME: CodeMirror themes */}}
                                            <option value="3024-day">3024-day</option>
                                            <option value="3024-night">3024-night</option>
                                            <option value="abcdef">abcdef</option>
                                            <option value="ambiance">ambiance</option>
                                            <option value="ambiance">ambiance-mobile</option>
                                            <option value="base16-dark">base16-dark</option>
                                            <option value="base16-light">base16-light</option>
                                            <option value="bespin">bespin</option>
                                            <option value="blackboard">blackboard</option>
                                            <option value="cobalt">cobalt</option>
                                            <option value="colorforth">colorforth</option>
                                            <option value="darcula">darcula</option>
                                            <option value="dracula">dracula</option>
                                            <option value="duotone-dark">duotone-dark</option>
                                            <option value="duotone-light">duotone-light</option>
                                            <option value="eclipse">eclipse</option>
                                            <option value="elegant">elegant</option>
                                            <option value="erlang-dark">erlang-dark</option>
                                            <option value="gruvbox-dark">gruvbox-dark</option>
                                            <option value="hopscotch">hopscotch</option>
                                            <option value="icecoder">icecoder</option>
                                            <option value="idea">idea</option>
                                            <option value="isotope">isotope</option>
                                            <option value="lesser-dark">lesser-dark</option>
                                            <option value="liquibyte">liquibyte</option>
                                            <option value="lucario">lucario</option>
                                            <option value="material">material</option>
                                            <option value="mbo">mbo</option>
                                            <option value="mdn-like">mdn-like</option>
                                            <option value="midnight">midnight</option>
                                            <option value="monokai">monokai</option>
                                            <option value="neat">neat</option>
                                            <option value="neo">neo</option>
                                            <option value="night">night</option>
                                            <option value="oceanic-next">oceanic-next</option>
                                            <option value="panda-syntax">panda-syntax</option>
                                            <option value="paraiso-dark">paraiso-dark</option>
                                            <option value="paraiso-light">paraiso-light</option>
                                            <option value="pastel-on-dark">pastel-on-dark</option>
                                            <option value="railscasts">railscasts</option>
                                            <option value="rubyblue">rubyblue</option>
                                            <option value="seti">seti</option>
                                            <option value="shadowfox">shadowfox</option>
                                            <option value="solarized">solarized</option>
                                            <option value="ssms">ssms</option>
                                            <option value="the-matrix">the-matrix</option>
                                            <option value="tomorrow-night-bright">tomorrow-night-bright</option>
                                            <option value="tomorrow-night-eighties">tomorrow-night-eighties</option>
                                            <option value="ttcn">ttcn</option>
                                            <option value="twilight">twilight</option>
                                            <option value="vibrant-ink">vibrant-ink</option>
                                            <option value="xq-dark">xq-dark</option>
                                            <option value="xq-light">xq-light</option>
                                            <option value="yeti">yeti</option>
                                            <option value="zenburn">zenburn</option>
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

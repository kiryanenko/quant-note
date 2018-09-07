import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import 'rc-switch/assets/index.css'
import Main from './Pages/Main/Main';
import Settings from './Pages/Settings/Settings'
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render((
    <BrowserRouter>
        <div className="h-100">
            <Route exact path="/" component={Main}/>
            <Route path="/settings" component={Settings}/>
        </div>
    </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();

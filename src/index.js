import React from 'react';
import ReactDOM from 'react-dom';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import 'rc-switch/assets/index.css'
import Main from './Components/Main/Main';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();

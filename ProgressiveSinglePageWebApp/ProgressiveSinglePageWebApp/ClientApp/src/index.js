import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Router } from 'react-router-dom';
import { Route } from 'react-router';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createBrowserHistory } from 'history';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import SamplesHome from './SamplesHome';
import Logon from './Logon';
import SampleDetails from './SampleDetails';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const history = createBrowserHistory({ basename: baseUrl });

var render = () => {
    return (<Router basename={baseUrl} history={history}>
    <App>
        <Route exact path="/" render={props => <Logon history={history}/>} />
        <Route exact path="/samples-home" component={SamplesHome} history={history} />
        <Route path="/samples-details/:id" component={SampleDetails} history={history} />
    </App>
</Router>)
}

ReactDOM.render(
    render(), 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
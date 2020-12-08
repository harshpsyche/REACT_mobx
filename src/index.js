import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './home';
import Time from './time';
import Data from './data';
import Currency from './currency';
import reportWebVitals from './reportWebVitals';
import {Route,BrowserRouter as Router,Link,browserHistory, Switch} from 'react-router-dom'
ReactDOM.render(
  <Router >
    <Switch>
    <Route path="/home" component={Home}></Route>
    <Route path="/time" component={Time}></Route>
    <Route path="/data" component={Data}></Route>
    <Route path="/currency" component={Currency}></Route>
    </Switch>
  </Router>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

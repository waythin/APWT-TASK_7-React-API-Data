import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './Components/Home';
import Head from './Components/Head';
import Foot from './Components/Foot';
import Status from './Components/Status';
import AllPosts from './Components/AllPosts';
import EffectHook from './Components/EffectHook';


ReactDOM.render(
  <React.StrictMode>
    <Router>
     
      <Head/>
        <Switch>

          <Route exact path="/"> 
            <Home/>
          </Route>

          <Route exact path="/post"> 
            <AllPosts/>
          </Route>

          <Route exact path="/usestate"> 
            <Status/>
          </Route>

          <Route exact path="/count"> 
            <EffectHook/>
          </Route>
          

        </Switch> 

      <Foot/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

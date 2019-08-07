import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import RouterDefine from './routerdefine';

class App extends Component {
  render() {
    return (
        <div className="">
            <RouterDefine/> 
        </div>
    );
  }
}

export default App;

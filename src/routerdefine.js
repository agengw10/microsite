import React, { Component } from 'react';
import { BrowserRouter as Router, Route , Switch} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Layout from "./navlayout";
import MicroSite from './microsite';
import CamPaign from './campaign';
import TraFik from './trafik';
import DataServer from './dataserver';
import DanLain from './dll';



export default class RouterDefine extends Component {
  render() {
    return (
        <Router>
            <Layout children={MicroSite}>
                <Switch>
                    <div className="">
                        <Route exact path="/" component={MicroSite} />
                        <Route exact path="/campaign" component={CamPaign} />
                        <Route exact path="/trafik" component={TraFik} />
                        <Route exact path="/dataserver" component={DataServer} />
                        <Route exact path="/dll" component={DanLain} />
                    </div>
                </Switch>
            </Layout>
        </Router>
    );
  }
}


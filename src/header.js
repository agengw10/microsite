import React, { Component } from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import {Link} from 'react-router-dom';
import { Button,setKey,Tabs,Tab,ControlledTabs } from 'react-bootstrap';


class HeaDer extends Component { 
    render() {
        const {HeaDer1,HeaDer2,HeaDer3,HeaDer4}=this.props;        
        return (
            <div className="">
                <div className="">
                    <div className="col-md-12 col-xs-12 logo">   
                        <a className="navbar-brand linkcolor">Microsite MNET</a>
                    </div>
                    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                    <Tab eventKey="1" title={HeaDer1}>
                        Disini detail trafik
                    </Tab>
                    <Tab eventKey="2" title={HeaDer2}>
                        Disini detail Campaign
                    </Tab>
                    <Tab eventKey="3" title={HeaDer3}>
                        Disini detail Server Maintenance
                    </Tab> 
                    <Tab eventKey="4" title={HeaDer4}>
                        Disini detail DLL
                    </Tab>                                     
                    </Tabs>                                   
                </div>
            </div>
        );
    }
}

export default HeaDer;

import React, { Component } from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import {Link} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import WhatsHot from '@material-ui/icons/Whatshot';
import RepeatIcon from '@material-ui/icons/Repeat';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import logoWF from './img/wifi.png';



class DataDll extends Component {
    render() { 
        return (
            <div className="">
                <div className="container atas">
                    <div className="row">
                        <div className="col-md-12 col-xs-12 judul">
                            <h3>Disini isi Data DLL</h3>
                        </div>
                        <div className="col-md-12 col-xs-12 contributor">
                            <strong>created : Ageng W10</strong>
                        </div>                      
                    </div> 
                </div>
            </div>
        );
    }
}

export default DataDll;
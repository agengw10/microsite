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
import logoWF from './img/wifi.png';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Doughnut } from 'react-chartjs-2';
import { Chart } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';


class Charts extends Component {
    constructor (props){
        super(props);
        this.state={
            chartData:{
                labels:['januari','februari','maret','april','mei','juni','juli','agustus','september','oktober','november','desember'],
                datasets:[
                    {
                        label:'login sukses',
                        data:[
                            10000,
                            12000,
                            13000,
                            14000,
                            15000,
                            16000,
                            10500,
                            12000,
                            13000,
                            14000,
                            15000,
                            16000                            
                        ],
                        backgroundColor:[
                             'rgba(255, 99, 132, 0.6)',
                             'rgba(54, 162, 235, 0.6)',
                             'rgba(255, 206, 86, 0.6)',
                             'rgba(75, 192, 192, 0.6)',
                             'rgba(153, 102, 255, 0.6)',
                             'rgba(255, 159, 64, 0.6)',
                             'rgba(255, 99, 132, 0.6)',
                             'rgba(54, 162, 235, 0.6)',
                             'rgba(255, 206, 86, 0.6)',
                             'rgba(75, 192, 192, 0.6)',
                             'rgba(153, 102, 255, 0.6)',
                             'rgba(255, 159, 64, 0.6)',                               
                        ]
                    }
                ]
            }
        }
    }
    
    render() { 
        return (
            <Grid item xs={12} sm={12}>
                Data Diagram Login WMS
            <Doughnut
                data={this.state.chartData}
                options={{ maintainAspectRatio: false }}
            /> 
            </Grid>                 
        );
    }
}

export default Charts;


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
import DiagramBar from './diagrambar';
import DiagramDonut from './diagramdonut';
import DiagramDonut2 from './diagramdonut2';
import TrafikGb from './trafikgb';
import TabelGb from './tabel';
import TabelGb2 from './tabel2';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
<Grid container spacing={3}>
    <Grid item xs={12} sm={6}>
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="h2">
            Data Wifi.id
        </Typography>
        <Typography variant="h6" component="h6">
        Login Sukses :1234
        </Typography>
        <Typography variant="h6" component="h6">
        Login Gagal :123
        </Typography>   
      </CardContent>
    </Card>
    </Grid>
    <Grid item xs={12} sm={6}>
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="h2">
        Data WMS
        </Typography>
        <Typography variant="h6" component="h6">
        Login Sukses :1234
        </Typography>
        <Typography variant="h6" component="h6">
        Login Gagal :123
        </Typography>   
      </CardContent>
    </Card>
    </Grid> 
    <Grid item xs={12} sm={12}>
        <Card className={classes.card}>
            <CardContent>
                <DiagramBar/>
             </CardContent>
        </Card>
    </Grid>  
    <Grid item xs={12} sm={6}>
        <Card className={classes.card}>
                <CardContent>        
                    <DiagramDonut/>
                </CardContent>
        </Card>       
    </Grid>
    <Grid item xs={12} sm={6}>
    <Card className={classes.card}>
                <CardContent>          
                    <DiagramDonut2/>
                </CardContent>
        </Card>                       
    </Grid>
    <Grid item xs={12} sm={12}>
        <Card className={classes.card}>
            <CardContent>
                <TabelGb/>
             </CardContent>
        </Card>
    </Grid>
    <Grid item xs={12} sm={12}>
        <Card className={classes.card}>
            <CardContent>
                <TabelGb2/>
             </CardContent>
        </Card>
    </Grid>              
</Grid>
  );
}


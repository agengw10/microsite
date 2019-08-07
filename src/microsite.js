import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import HeaDer from './header';
import NavLayout from './navlayout';


class App extends Component {
  state={
    header:{
        index0:"Trafik",
        index1:"Campaign",
        index2:"Server Maintenance",
        index3:"Dll" 
    },
  }     
  render() {     
    return (
        <div className="">
            <div className="">
                {/* <HeaDer
                    HeaDer1={this.state.header.index0}
                    HeaDer2={this.state.header.index1}
                    HeaDer3={this.state.header.index2}
                    HeaDer4={this.state.header.index3}          
                /> */}
                <NavLayout
                    HeaDer1={this.state.header.index0}
                    HeaDer2={this.state.header.index1}
                    HeaDer3={this.state.header.index2}
                    HeaDer4={this.state.header.index3}          
                />              
            </div>
        </div>
    );
  }
}

export default App;
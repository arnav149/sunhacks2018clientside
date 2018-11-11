import React, { Component } from 'react';
import './App.css';
import LnL from './LnL';
import Particles from 'react-particles-js';
import Location1 from './Location1'


class App extends Component {
  render() {
    return (
      <div className="App">
      <Particles className='parti'
     params={{
         particles: {
           number:{
             value:40,
             density:{
               enable:true,
               value_area:800
             }
           },
          move:
          {
            enable:true,
            speed:7
          },

         }
       }}/>
        <LnL/>
        <Location1/>
      </div>
    );
  }
}

export default App;

import React from 'react';

class LnL extends React.Component{
  constructor(){
    super();
    this.state={
      lat:'',
      long:''
    }
  }

  onLatChange=(event)=>{
    this.setState({lat:event.target.value})
  }

  onLongChange=(event)=>{
    this.setState({long:event.target.value})
  }

  onButtonClick=()=>{
    fetch('http://localhost:3000/driver',{
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({lat: this.state.lat,long:this.state.long})
    })
    .then(response => response.json())
    .catch(err=>console.log('error'))
  }

  render(){
    return(
      <div>
      <h3>Driver's Location</h3>
      <div>
      <input className='outline bg-light-blue w-50 pa2 ma3 mr2' placeholder='Latitude' type='text' onChange={this.onLatChange}></input>
      </div>
      <div>
      <input className='outline bg-light-blue w-50 pa2 ma3 mr2' type='text' placeholder='Longitude' onChange={this.onLongChange}></input>
      </div>
      <div>
      <button className='outline bg-light-green w-30 pa2 ma3 mr2' onClick={this.onButtonClick}>Send to server</button>
      </div>
      </div>
    )
  }
}

export default LnL;

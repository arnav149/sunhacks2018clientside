import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import React from 'react';
import geolocation from 'geolocation';

let latitude,longitude;
export class MapContainer extends React.Component {
  constructor()
  {
    super();
    this.state={
      lat:0,
      long:0
    }
  }

  onRefresh=()=>{
    this.setState({lat:latitude,long:longitude})
    fetch('http://localhost:3000/driver',{
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({lat: this.state.lat,long:this.state.long})
    })
    .then(response => response.json())
    .catch(err=>console.log('error'))
  }


  render() {
    geolocation.getCurrentPosition(function (err, position) {
    if (err) throw err
    latitude= position.coords.latitude;
    longitude= position.coords.longitude
    })

     const style = {
      width: '50vw',
      height: '75vh',
      'marginLeft': 'auto',
      'marginRight': 'auto'
    }

    return (

      <div>
      <div>
      <button className='outline bg-light-green w-30 pa2 ma3 mr2' onClick={this.onRefresh}>Refresh</button>
      </div>
      <section >
      <Map style={style} google={this.props.google} initialCenter={{lat:0,lng:0}} center={{lat:this.state.lat,lng:this.state.long}} zoom={14}>

        <Marker onClick={this.onMarkerClick}
                position={{lat:this.state.lat,lng:this.state.long}}name={'Current location'} />

      </Map>
      </section >
      </div>


    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyApsiMJBsI6piScQHEWkYOEbUU211S2M30'
})(MapContainer)

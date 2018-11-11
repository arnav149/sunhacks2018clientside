import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import React from 'react';

export class MapContainer2 extends React.Component {
  render() {
    return (
      <div className='mw4 center bg-light-gray ph5'>
      <Map google={this.props.google} initialCenter={{
            lat: 33.4318171,
            lng: -111.9063735
          }} zoom={14} onClick={this.onMapClicked}>

        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
      </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyApsiMJBsI6piScQHEWkYOEbUU211S2M30'
})(MapContainer2)

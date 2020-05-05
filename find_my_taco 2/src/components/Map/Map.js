import React, {Component} from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import './Map.css';

const mapStyles = {
    width: '50%',
    height: '50%',
  };
class something extends Component {
    render() {
        return (
            <div>
            <Map
            google={this.props.google}
            zoom={8}
            style={mapStyles}
            initialCenter={{ lat: 47.444, lng: -122.176}}
          >
              <Marker position={{ lat: 48.00, lng: -122.00}} />
        </Map>
        </div>
        );
    }
   }

  export default GoogleApiWrapper({
    apiKey: 'AIzaSyDSyjZgFKLuGMMwz146ryKivotdPhkplJI'
  })(Map);
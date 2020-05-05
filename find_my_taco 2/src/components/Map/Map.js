import React, {Component} from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

class App extends Component {
    render() {
        return (
        <div>
        </div>
        );
    }
   }

  export default GoogleApiWrapper({
    apiKey: 'AIzaSyDSyjZgFKLuGMMwz146ryKivotdPhkplJI'
  })(Map);
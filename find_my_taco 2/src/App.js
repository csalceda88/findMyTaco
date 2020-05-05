import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Signin from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import Logo from './components/Logo/logo';
import FoodTruck  from './components/FoodTruck/foodtruck';
import Map from './components/Map/Map';

import './App.css';

const particlesOptions = {
  particles: {
    number: {
      value: 300,
      density: {
        enable: true,
        value_area: 800
      }
    },
    line_linked: {
        color: "#ea5e51",
        opacity: .3,
    }

  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'signin',
      isSignedIn: false,
      user: {
        id: '',
        name: '',
        email: '',
        joined: ''
      }
    }
  }

  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      joined: data.joined
    }})
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({isSignedIn: false})
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    } else if (route === 'foodtruck') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }

  render() {
    const { isSignedIn, route } = this.state;
    let divcontent;

    if (route === 'home') {
      divcontent = <Map />;
    } else if (route === 'logo') {
      divcontent = <Logo />;
    } else if (route === 'foodtruck') {
      divcontent = <FoodTruck />;
    } else if (route === 'signin') {
      divcontent = <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>;
    } else if (route === 'register') {
      divcontent = <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>;
    }

    return (
      <div className="App">
         <Particles className='particles'
          params={particlesOptions}
        />
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
        { 
          <div>
            {divcontent}
          </div>
        }
      </div>
    );
  }
}

export default App;

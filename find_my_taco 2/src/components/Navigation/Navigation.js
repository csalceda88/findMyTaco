import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
    if (isSignedIn) {
      return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
          <p onClick={() => onRouteChange('foodtruck')} className='f6 link dim black underline pa3 pointer'>FoodTruck</p>
          <p onClick={() => onRouteChange('profile')} className='f6 link dim black underline pa3 pointer'>Profile</p>
          <p onClick={() => onRouteChange('signout')} className='f6 link dim black underline pa3 pointer'>Sign Out</p>
        </nav>
      );
    } else {
      return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
          <p onClick={() => onRouteChange('signin')} className='f6 link dim black underline pa3 pointer'>Sign In</p>
          <p onClick={() => onRouteChange('register')} className='f6 link dim black underline pa3 pointer'>Register</p>
        </nav>
      );
    }
}

export default Navigation;

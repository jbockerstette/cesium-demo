import React from 'react';
import CesiumGlobe from './cesium/CesiumGlobe';
import reactLogoPic from './logo.svg';
import redsLogoPic from './redsLogo.png';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reactLogo: { lat: 37.484505, lon: -122.147877, image: reactLogoPic },
      redsLogo: {
        lat: 39.097465,
        lon: -84.50703,
        image: redsLogoPic,
        scale: 0.3
      }
    };
  }

  render() {
    const { reactLogo, redsLogo } = this.state;
    const icons = [reactLogo, redsLogo];

    const containerStyle = {
      width: '100%',

      position: 'fixed'
    };
    return (
      <div style={containerStyle}>
        <CesiumGlobe icons={icons} />
        <div style={{ position: 'fixed', top: 0 }}>
          <div style={{ color: 'white', fontSize: 40 }}>
            Text Over the Globe
          </div>
        </div>
      </div>
    );
  }
}

export default App;

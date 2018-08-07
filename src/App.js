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
      },
      label: { lat: 35.0, lon: -100.0, text: 'Catch phrase here' },
      line: [
        { lat: 47.5, lon: -122.3, alt: 20000 },
        { lat: 36.2, lon: -115.0, alt: 20000 },
        { lat: 39.0, lon: -94.6, alt: 20000 },
        { lat: 30.4, lon: -81.6, alt: 20000 }
      ],
      flyToLocation: null
    };
  }

  handleFlyToClicked = () => {
    this.setState({
      flyToLocation: { lat: 32.6925, lon: -117.1587, alt: 100000 }
    });
  };

  handleLeftClick = coords => {
    console.log('left mouse clicked at:', coords);
  };

  render() {
    const { reactLogo, redsLogo, label, line, flyToLocation } = this.state;
    const icons = [reactLogo, redsLogo];
    const labels = [label];
    const polylines = [line];

    const containerStyle = {
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      position: 'fixed'
    };
    return (
      <div style={containerStyle}>
        <CesiumGlobe
          icons={icons}
          labels={labels}
          polylines={polylines}
          onLeftClick={this.handleLeftClick}
          flyToLocation={flyToLocation}
        />
        <div style={{ position: 'fixed', top: 0 }}>
          <div style={{ color: 'white', fontSize: 40 }}>
            Text Over the Globe
          </div>
          <button style={{ fontSize: 40 }} onClick={this.handleFlyToClicked}>
            Jump Camera Location
          </button>
        </div>
      </div>
    );
  }
}

export default App;

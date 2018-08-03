import Viewer from 'cesium/Source/Widgets/Viewer/Viewer';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.cesiumContainer = React.createRef();
  }

  componentDidMount() {
    console.log(this.cesiumContainer.current);

    this.viewer = new Viewer(this.cesiumContainer.current);
  }

  render() {
    return (
      <div>
        <div id="cesiumContainer" ref={this.cesiumContainer} />
      </div>
    );
  }
}

export default App;

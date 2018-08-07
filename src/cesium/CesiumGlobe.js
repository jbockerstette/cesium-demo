import React, { Component } from 'react';

import Viewer from 'cesium/Source/Widgets/Viewer/Viewer';
import BingMapsImageryProvider from 'cesium/Source/Scene/BingMapsImageryProvider';
import CesiumTerrainProvider from 'cesium/Source/Core/CesiumTerrainProvider';
import CesiumBillboardExample from './CesiumBillboardExample';

const BING_MAPS_URL = '//dev.virtualearth.net';
const BING_MAPS_KEY =
  'Aoe2BZeGCebjptdryI4Z04Me2TxfEP8iJjflvJkbma4YmB9I_HH3MmrlNmJWZVjK';
const STK_TERRAIN_URL = '//assets.agi.com/stk-terrain/world';

export default class CesiumGlobe extends Component {
  constructor(props) {
    super(props);
    this.state = { viewerLoaded: false };
    this.cesiumContainer = React.createRef();
  }

  componentDidMount() {
    const imageryProvider = new BingMapsImageryProvider({
      url: BING_MAPS_URL,
      key: BING_MAPS_KEY
    });

    const terrainProvider = new CesiumTerrainProvider({
      url: STK_TERRAIN_URL
    });

    this.viewer = new Viewer(this.cesiumContainer.current, {
      animation: false,
      baseLayerPicker: false,
      fullscreenButton: false,
      geocoder: false,
      homeButton: false,
      infoBox: false,
      sceneModePicker: false,
      selectionIndicator: true,
      timeline: false,
      navigationHelpButton: false,
      scene3DOnly: true,
      imageryProvider,
      terrainProvider
    });
    this.setState({ viewerLoaded: true });
  }

  componentWillUnmount() {
    if (this.viewer) {
      this.viewer.destroy();
    }
  }

  renderContents() {
    const { viewerLoaded } = this.state;
    let contents = null;
    if (viewerLoaded) {
      const { scene } = this.viewer;
      contents = (
        <span>
          <CesiumBillboardExample scene={scene} />
        </span>
      );
    }
    return contents;
  }

  render() {
    const containerStyle = {
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      position: 'fixed',
      display: 'flex',
      alignItems: 'stretch'
    };

    const widgetStyle = {
      flexGrow: 2
    };

    const contents = this.renderContents();

    return (
      <div className="cesiumGlobeWrapper" style={containerStyle}>
        <div
          className="cesiumWidget"
          ref={this.cesiumContainer}
          style={widgetStyle}
        >
          {contents}
        </div>
      </div>
    );
  }
}

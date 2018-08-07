import { Component } from 'react';

import Cartesian3 from 'cesium/Source/Core/Cartesian3';
import BillboardCollection from 'cesium/Source/Scene/BillboardCollection';

import logo from '../logo.svg';

export default class CesiumBillboardExample extends Component {
  constructor(props) {
    super(props);

    this.billboards = new BillboardCollection();

    const { scene } = props;

    if (scene) {
      scene.primitives.add(this.billboards);
    }
  }

  componentDidMount() {
    const lat = 37.484505;
    const lon = -122.147877;
    const position = Cartesian3.fromDegrees(lon, lat);

    this.billboard = this.billboards.add({
      position,
      image: logo
    });
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.logoCoords !== this.props.logoCoords &&
      this.props.logoCoords
    ) {
      this.updateIcon();
    }
  }

  componentWillUnmount() {
    const { billboards } = this;

    if (!billboards.isDestroyed()) {
      billboards.destroy();
    }

    const { scene } = this.props;

    if (scene && !scene.isDestroyed() && scene.primitives) {
      scene.primitives.remove(billboards);
    }
  }

  updateIcon() {
    const { logoCoords } = this.props;
    const { lat, lon } = logoCoords;
    if (this.billboard) {
      const newPosition = Cartesian3.fromDegrees(lon, lat);
      this.billboard.position = newPosition;
    }
  }

  render() {
    return null;
  }
}

import React from 'react';
import ReactDOM from 'react-dom';
import 'cesium/Source/Widgets/widgets.css';
import buildModuleUrl from 'cesium/Source/Core/buildModuleUrl';
import App from './App';
import './index.css';

buildModuleUrl.setBaseUrl('./cesium/');

ReactDOM.render(<App />, document.getElementById('root'));

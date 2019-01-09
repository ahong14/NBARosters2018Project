//import react library
import React from 'react';
//react dom 
import ReactDOM from 'react-dom';
//main app component
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import 'materialize-css/dist/css/materialize.min.css';
import './index.css';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Titillium Web:300,400,700', 'sans-serif']
  }
});

ReactDOM.render(<App/>, document.getElementById('root'));
// import "./styles/reset.css";
// import "./styles/styles.css";

import React from 'react';
import ReactDOM from 'react-dom/server'
import App from './App.tsx';

const result = ReactDOM.renderToString(<App />);

console.log(result);

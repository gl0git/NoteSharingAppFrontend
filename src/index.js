import { createRoot } from 'react-dom/client'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import RouteSwitch from './RouteSwitch'

const root = createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <RouteSwitch />
  </React.StrictMode>, 
);
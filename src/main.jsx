import React from 'react';
import ReactDOM from 'react-dom/client';

import { SuraApp } from './SuraApp';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SuraApp />
  </React.StrictMode>
);

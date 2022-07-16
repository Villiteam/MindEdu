import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './layout/Layout';
import './styles/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>
);

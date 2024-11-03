/*
 * @Author: Diana Tang
 * @Date: 2024-11-03 22:00:18
 * @LastEditors: Diana Tang
 * @Description: some description
 * @FilePath: /DT-components/src/index.tsx
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
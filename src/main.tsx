import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import EchartsTest from "./E";
import EchartsColumnarTest from "./T";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <EchartsColumnarTest></EchartsColumnarTest>
      <div style={{ height:50 } }/>
      <EchartsTest />

  </React.StrictMode>
)


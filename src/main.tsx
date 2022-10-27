import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import EchartsTest from "./E";
import EchartsColumnarTest from "./T";
import Timer from "./A";
import Form from "./F";
import 'antd/dist/antd.css';
import Example from "./H";
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>

      <div style={{ height:50 } }/> <div style={{ height:50 } }/> <div style={{ height:50 } }/> <div style={{ height:50 } }/> <div style={{ height:50 } }/> <div style={{ height:50 } }/> <div style={{ height:50 } }/>
      <Timer/>
      <EchartsColumnarTest></EchartsColumnarTest>
      {/*<div style={{ height:50 } }/>*/}
      {/*<EchartsTest />*/}
      {/*<Form>*/}

      {/*</Form>*/}

      <Example></Example>

  </React.StrictMode>
)


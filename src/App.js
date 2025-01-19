import './App.css';
import React from "react";
import Nav from './nav';
import Page from './page';
import './Nav.css';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const bodyStyle = {
    backgroundColor: 'black',
    height: '100%',
    color: 'white',
  };

  const wrapperStyle = {
    paddingTop: '7vh'
  };

  return (
    <body style={bodyStyle}>
      <BrowserRouter>
        <Nav />
        <div style={wrapperStyle}>
          <Page />
        </div>
      </BrowserRouter>
    </body>
  );
}

export default App;

import React from 'react';
import Nav from './Components/Nav/Nav';
import routes from './routes';
import './App.css';
import {withRouter} from 'react-router-dom'

function App() {
  return (
    <div className="App">
        {props.location.pathname === '/' ? null : <Nav />}
        {routes}
    </div>
  );
}

export default App;
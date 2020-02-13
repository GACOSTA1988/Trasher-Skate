import React from 'react';
import logo from './logo.svg';
import './App.css';
import ShaneAdd from './components/ShaneAdd.jsx'
import NavBar from './components/NavBar.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import GoogleFontLoader from 'react-google-font-loader';
import YouTube from 'react-youtube';
import Video from './components/Video.jsx'
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <ShaneAdd/>
    <NavBar/>
    <Switch>
     <Route exact path='/video' component={Video} />
     </Switch>
    </div>

  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import ShaneAdd from './components/ShaneAdd.jsx'
import NavBar from './components/NavBar.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import GoogleFontLoader from 'react-google-font-loader';

function App() {
  return (
    <div className="App">
    <ShaneAdd/>
    <NavBar/>
    </div>

  );
}

export default App;

import { Routes, Route, Link, } from 'react-router-dom';
import Character from './Pages/CharacterPage';
import HomePage from './Pages/WelcomPage';
import './Styles/StyledHeader.scss';
import "./Styles/App.scss";
import React from 'react';
import logo from "./Images/logo.png";



function App() {
  return (
    <div className="wrapper">
      <div className="container">

        <div className="header">
          <div className='content'>
            <div className="logo">
              <img src={logo} alt="logo" width={150} height={60} />
            </div>
            <div className="navbar">
              <Link className='link' to='/'>Home</Link>
              <Link className='link' to='/characters'>Characters</Link>
            </div>
          </div>
        </div>

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/characters' element={<Character />} />
        </Routes>

      </div>
    </div >
  );
}

export default App;

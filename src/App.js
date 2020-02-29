/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import profileImage from './img/forhad.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>
        Welcome to React App
      </h1>
      <h2>Author: Md Forhad Sarkar</h2>
      <img 
        style={{width:400}} 
        src={profileImage} 
        alt="profile-image"
      />
    </div>
  );
}

export default App;

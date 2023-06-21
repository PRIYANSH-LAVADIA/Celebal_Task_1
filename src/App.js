import React from 'react';
import './App.css';
import Navbar from './components/Navbar';

import Section_B from './components/Section_B';
import Section_C from './components/Section_C';
import Section_D from './components/Section_D';
import Companies from './components/Companies';
import Footer from './components/Footer';
import Trip from './components/Trip';




function App() {
  return (
    <div className="App">
      <Navbar/>
      
      <Trip/>
      
      <Section_B/>
      <Section_C/>
      <Companies/>
      <Section_D/>
      <Footer/>
      
      </div>
  );
}

export default App;

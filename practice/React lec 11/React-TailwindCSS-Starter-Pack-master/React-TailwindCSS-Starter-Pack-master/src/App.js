import React from 'react';
import './App.css';
import useGet from './hooks/useGet';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Content from './components/Content'

function App() {
  return (
    <div>
      <Navbar/>
      <Content/>
      <Footer/>
    </div>
  )
}

export default App;

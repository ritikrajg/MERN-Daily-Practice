import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Cart from './pages/Cart';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar/>
      <main className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </main>
    </div>
  )
}

export default App;

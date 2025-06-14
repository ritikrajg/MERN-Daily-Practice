import React from 'react';
import './App.css';
import Random from './components/Random';
import Tag from './components/Tag'
function App() {
  return (
    <div className='relative flex flex-col items-center w-full h-screen overflow-x-hidden gap-9 background'>
      <div className='flex items-center justify-center w-5/6 h-16 my-8 bg-white rounded-md'>
        <div className='text-4xl font-bold'>RANDOM GIFS</div>
      </div>
      <Random/>
      <Tag/>
    </div>
  )
}

export default App;

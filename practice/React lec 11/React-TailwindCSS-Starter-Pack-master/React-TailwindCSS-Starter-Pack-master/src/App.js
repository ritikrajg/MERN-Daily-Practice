import React from 'react';
import './App.css';
import useGet from './hooks/useGet';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Content from './components/Content';

function App() {
  const { loading, page, totalPages, posts, pageHandler } = useGet();

  return (
    <div>
      <Navbar />
      <Content loading={loading} posts={posts} />
      <Footer page={page} totalPages={totalPages} pageHandler={pageHandler} />
    </div>
  );
}

export default App;

import React from 'react';
import './App.scss';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Posts from '../../pages/posts/Posts';

function App() {
  return (
    <div className="app">
      <Header />
      <Posts />
      <Footer />
    </div>
  );
}

export default App;

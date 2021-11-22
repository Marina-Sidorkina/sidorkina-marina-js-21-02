import React from 'react';
import './App.scss';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Profile from '../../pages/profile/Profile';

function App() {
  return (
    <div className="app">
      <Header />
      <Profile />
      <Footer />
    </div>
  );
}

export default App;

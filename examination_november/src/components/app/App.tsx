import React from 'react';
import './App.scss';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Login from '../../pages/login/Login';

function App() {
  return (
    <div className="app">
      <Header />
      <Login />
      <Footer />
    </div>
  );
}

export default App;

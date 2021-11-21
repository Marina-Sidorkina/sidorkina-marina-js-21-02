import React from 'react';
import './App.scss';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Registration from '../../pages/registration/Registration';

function App() {
  return (
    <div className="app">
      <Header />
      <Registration />
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import './App.scss';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Users from '../../pages/users/Users';

function App() {
  return (
    <div className="app">
      <Header />
      <Users />
      <Footer />
    </div>
  );
}

export default App;

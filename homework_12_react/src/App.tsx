import React from "react";
import "./App.css";
import Header from "./components/header/Header";

import schK280 from './img/schimmel-k-280.jpg';
import fazF156 from './img/fazioli-f-156.png';
import yamYus1 from './img/yamaha-yus-1.png';
import kawNd21 from './img/kawai-nd-21.jpg';
import schK256 from './img/schimmel-k-256.jpg';
import fazF183 from './img/fazioli-f-183.png';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <form className="sidebar">
          <fieldset className="sidebar__filter filter">
            <legend className="filter__category">Рояли</legend>
            <ul className="filter__values">
              <li className="filter__value">
                <input className="filter__input" type="checkbox" id="grand-piano-1"/>
                <label className="filter__label" htmlFor="grand-piano-1">Yamaha</label>
              </li>
              <li className="filter__value">
                <input className="filter__input" type="checkbox" id="grand-piano-2"/>
                <label className="filter__label" htmlFor="grand-piano-2">Schimmel</label>
              </li>
              <li className="filter__value">
                <input className="filter__input" type="checkbox" id="grand-piano-3"/>
                <label className="filter__label" htmlFor="grand-piano-3">Kawai</label>
              </li>
              <li className="filter__value">
                <input className="filter__input" type="checkbox" id="grand-piano-4"/>
                <label className="filter__label" htmlFor="grand-piano-4">Fazioli</label>
              </li>
            </ul>
          </fieldset>
          <fieldset className="sidebar__filter filter">
            <legend className="filter__category">Пианино</legend>
            <ul className="filter__values">
              <li className="filter__value">
                <input className="filter__input" type="checkbox" id="piano-1"/>
                <label className="filter__label" htmlFor="piano-1">Yamaha</label>
              </li>
              <li className="filter__value">
                <input className="filter__input" type="checkbox" id="piano-2"/>
                <label className="filter__label" htmlFor="piano-2">Schimmel</label>
              </li>
              <li className="filter__value">
                <input className="filter__input" type="checkbox" id="piano-3"/>
                <label className="filter__label" htmlFor="piano-3">Kawai</label>
              </li>
            </ul>
          </fieldset>
        </form>
        <section className="page">
          <div className="promo">
            <h2 className="promo__title">Пианино и рояли с многолетней историей</h2>
            <p className="promo__message">Приобретите идеальное фортепиано для своих целей</p>
          </div>
          <div className="categories">
            <div className="category categories__item">
              <a className="category__link" href="#"><h4 className="category__title">Пианино</h4></a>
              <p className="category__message">Выбор для учебы</p>
            </div>
            <div className="category categories__item">
              <a className="category__link" href="#"><h4 className="category__title">Рояли</h4></a>
              <p className="category__message">Выбор профессионала</p>
            </div>
          </div>
          <div className="favourite">
            <h3 className="favourite__title">Популярные</h3>
            <ul className="favourite__pianos pianos">
              <li className="piano pianos__item">
                <img className="piano__img" src={schK280} alt="Фото инструмента" width="70"/>
                  <a className="piano__title-link" href="#"><h4 className="piano__title">РОЯЛЬ SCHIMMEL K 280</h4></a>
                  <a className="piano__button" href="#">Подробнее</a>
              </li>
              <li className="piano pianos__item">
                <img className="piano__img" src={fazF156} alt="Фото инструмента" width="70"/>
                <a className="piano__title-link" href="#"><h4 className="piano__title">РОЯЛЬ FAZIOLI F156</h4></a>
                <a className="piano__button" href="#">Подробнее</a>
              </li>
              <li className="piano pianos__item">
                <img className="piano__img" src={yamYus1} alt="Фото инструмента" width="70"/>
                <a className="piano__title-link" href="#"><h4 className="piano__title">ПИАНИНО YAMAHA YUS1</h4></a>
                <a className="piano__button" href="#">Подробнее</a>
              </li>
              <li className="piano pianos__item">
                <img className="piano__img" src={kawNd21} alt="Фото инструмента" width="70"/>
                <a className="piano__title-link" href="#"><h4 className="piano__title">ПИАНИНО KAWAI ND-21</h4></a>
                <a className="piano__button" href="#">Подробнее</a>
              </li>
              <li className="piano pianos__item">
                <img className="piano__img" src={schK256} alt="Фото инструмента" width="70"/>
                <a className="piano__title-link" href="#"><h4 className="piano__title">РОЯЛЬ SCHIMMEL K 256</h4></a>
                <a className="piano__button" href="#">Подробнее</a>
              </li>
              <li className="piano pianos__item">
                <img className="piano__img" src={fazF183} alt="Фото инструмента" width="70"/>
                <a className="piano__title-link" href="#"><h4 className="piano__title">РОЯЛЬ FAZIOLI F183</h4></a>
                <a className="piano__button" href="#">Подробнее</a>
              </li>
            </ul>
          </div>
        </section>
      </main>
      <footer className="footer">
        <p className="footer__text">Marina Sidorkina 2021</p>
      </footer>
    </div>
  );
}

export default App;

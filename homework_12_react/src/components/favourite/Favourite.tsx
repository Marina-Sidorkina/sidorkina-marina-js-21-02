import React from "react";
import "./Favourite.css";
import schK280 from "../../mocks/img/schimmel-k-280.jpg";
import fazF156 from "../../mocks/img/fazioli-f-156.png";
import yamYus1 from "../../mocks/img/yamaha-yus-1.png";
import kawNd21 from "../../mocks/img/kawai-nd-21.jpg";
import schK256 from "../../mocks/img/schimmel-k-256.jpg";
import fazF183 from "../../mocks/img/fazioli-f-183.png";

class Favourite extends React.Component {
  render() {
    return (
      <div className="favourite">
        <h3 className="favourite__title">Популярные</h3>
        <ul className="favourite__items">
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
    )
  }
}

export default Favourite;

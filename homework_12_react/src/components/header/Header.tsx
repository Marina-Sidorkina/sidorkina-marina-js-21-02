import React from "react";
import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="header__logo">PIANOS</div>
        <h1 className="header__title">Пианино и рояли</h1>
      </header>
    )
  }
}

export default Header;

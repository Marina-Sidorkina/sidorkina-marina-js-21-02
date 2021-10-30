import React from "react";
import "./Theme.css";

class Theme extends React.Component {
  render() {
    return (
      <form className="theme">
        <label className="theme__label" htmlFor="theme">Тёмная тема</label>
        <input className="theme__input" type="checkbox" id="theme"/>
      </form>
    );
  }
}

export default Theme;

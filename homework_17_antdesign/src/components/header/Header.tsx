import React, { useContext } from "react";
import "./Header.scss";
import { IHeaderProps } from "../../@types/interfaces/components";
import Limit from "../limit/Limit";
import Loader from "../loader/Loader";
import { ThemeContext } from "../../contexts/ThemeContext";
import { Menu } from "antd";
import { Link } from "react-router-dom";

const Header = (props: IHeaderProps) => {
  const themeContext = useContext(ThemeContext);
  const { isLoading, showLimit,
          perPageLimit, currentMenuItem,
          omMenuItemChange, onLimitChange } = props;

  const onMenuChange = (evt: { key: string; }) => {
    omMenuItemChange(evt.key);
  };

  return (
    <header className={`header app__header ${ themeContext.darkTheme ? "header_dark" : "" }`}>
      <Menu className="header__menu"
            mode="horizontal"
            selectedKeys={[currentMenuItem]}
            onClick={ onMenuChange }>
        <Menu.Item key="main">
          <Link to="/list">Главная</Link>
        </Menu.Item>
        <Menu.Item key="registration">
          <Link to="/registration">Регистрация</Link>
        </Menu.Item>
      </Menu>
      { isLoading ? <Loader/> : null }
      { !showLimit ? null :
        <Limit onValueChange={ onLimitChange }
               perPageLimit={ perPageLimit }/>
      }
    </header>
  );
}

export default Header;

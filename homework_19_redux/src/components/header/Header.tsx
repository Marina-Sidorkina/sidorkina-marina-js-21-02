import React, { useContext } from "react";
import "./Header.scss";
import Limit from "../limit/Limit";
import Loader from "../loader/Loader";
import { ThemeContext } from "../../contexts/ThemeContext";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updateCurrentMenuItemAction } from "../../redux/actions/app";
import { bindActionCreators } from "redux";

interface IHeaderProps {
  isLoading: boolean;
  currentMenuItem: string,
  showLimit: boolean;
  updateCurrentMenuItem:  Function;
}
const Header = (props: IHeaderProps) => {
  const themeContext = useContext(ThemeContext);

  const onMenuChange = (evt: { key: string; }) => {
    props.updateCurrentMenuItem(evt.key);
  };

  return (
    <header className={`header app__header ${ themeContext.darkTheme ? "header_dark" : "" }`}>
      <Menu className="header__menu"
            mode="horizontal"
            selectedKeys={[props.currentMenuItem]}
            onClick={ onMenuChange }>
        <Menu.Item key="main"><Link to="/list">Main</Link></Menu.Item>
        <Menu.Item key="registration"><Link to="/registration">Registration</Link></Menu.Item>
      </Menu>
      { props.isLoading ? <Loader /> : null }
      { !props.showLimit ? null : <Limit /> }
    </header>
  );
}

export default connect(
  (state: any) => ({
    isLoading: state.app.settings.isLoading,
    currentMenuItem: state.app.settings.currentMenuItem,
    showLimit: state.app.settings.showNavItems
  }),
  (dispatch) => ({
    updateCurrentMenuItem: bindActionCreators(updateCurrentMenuItemAction, dispatch),
  }),
)(Header);

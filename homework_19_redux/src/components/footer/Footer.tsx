import React from "react";
import "./Footer.scss";
import Theme from "../theme/Theme";
import Paginator from "../paginator/Paginator";
import { connect } from "react-redux";

interface IFooterProps {
  showNavItems: boolean;
}

const Footer = (props: IFooterProps) => {
  const { showNavItems } = props;
  return (
    <footer className="footer">
      {!showNavItems ? null :
        <Paginator />
      }
      <Theme />
    </footer>
  );
}

export default connect(
  (state: any) => ({
    showNavItems: state.app.settings.showNavItems,
  })
)(Footer);

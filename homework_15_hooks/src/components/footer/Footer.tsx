import React from "react";
import "./Footer.scss";
import Theme from "../theme/Theme";
import Paginator from "../paginator/Paginator";
import {IFooterProps} from "../../@types/interfaces/components";

const Footer = (props: IFooterProps) => {
  return (
    <footer className="footer">
      <Paginator onCurrentChange={ props.onPageChange }
                 current={ props.currentPage }
                 className={ props.paginatorClassName }/>
      <Theme className={ props.themeClassName }/>
    </footer>
  );
}

export default Footer;

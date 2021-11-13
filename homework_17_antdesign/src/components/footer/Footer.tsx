import React from "react";
import "./Footer.scss";
import Theme from "../theme/Theme";
import Paginator from "../paginator/Paginator";
import { IFooterProps } from "../../@types/interfaces/components";

const Footer = (props: IFooterProps) => {
  return (
    <footer className="footer">
      {!props.showPaginator ? null :
        <Paginator onCurrentChange={ props.onPageChange }
                   current={ props.currentPage }
                   itemsAmount={ props.itemsAmount }
                   perPageLimit={ props.perPageLimit }/>
      }
      <Theme />
    </footer>
  );
}

export default Footer;

import React from "react";
import "./Footer.scss";
import Theme from "../theme/Theme";
import Paginator from "../paginator/Paginator";
import { IFooterProps } from "../../@types/interfaces/components";

const Footer = (props: IFooterProps) => {
  const { currentPage, perPageLimit, showPaginator, itemsAmount} = props;
  return (
    <footer className="footer">
      {!showPaginator ? null :
        <Paginator current={ currentPage }
                   itemsAmount={ itemsAmount }
                   perPageLimit={ perPageLimit }/>
      }
      <Theme />
    </footer>
  );
}

export default Footer;

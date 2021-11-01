import React from "react";
import "./Footer.css";
import Theme from "../theme/Theme";
import Paginator from "../paginator/Paginator";
import {IFooterProps} from "../../@types/interfaces/components";

class Footer extends  React.Component<IFooterProps> {
  render() {
    return (
      <footer className="footer">
        <Paginator onCurrentChange={ this.props.onPageChange }
                   current={ this.props.currentPage }
                   className={ this.props.paginatorClassName }/>
        <Theme className={ this.props.themeClassName }/>
      </footer>
    );
  }
}

export default Footer;

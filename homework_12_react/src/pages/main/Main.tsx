import React from "react";
import Promo from "../../components/promo/Promo";
import {promo} from "../../mocks/promo";
import Categories from "../../components/categories/Categories";
import {categories} from "../../mocks/categories";
import Favourite from "../../components/favourite/Favourite";
import {pianos} from "../../mocks/pianos";

class Main extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Promo title={ promo.title } message={ promo.message }/>
        <Categories categories={ categories }/>
        <Favourite favourites={ pianos }/>
      </React.Fragment>
    )
  }
}

export default Main;

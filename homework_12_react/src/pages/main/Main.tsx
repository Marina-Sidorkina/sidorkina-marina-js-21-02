import React from "react";
import Promo from "../../components/promo/Promo";
import Categories from "../../components/categories/Categories";
import Favourite from "../../components/favourite/Favourite";
import { IMainProps } from "../../@types/interfaces/interfaces";

class Main extends React.Component<IMainProps> {
  render() {
    const { promoTitle,
            promoMessage,
            categoriesData: { categories },
            favouritesData: { favourites } } = this.props;

    return (
      <React.Fragment>
        <Promo title={ promoTitle } message={ promoMessage }/>
        <Categories categories={ categories }/>
        <Favourite favourites={ favourites }/>
      </React.Fragment>
    )
  }
}

export default Main;

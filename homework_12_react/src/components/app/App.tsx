import React from "react";
import "./App.css";
import Header from "../header/Header";
import Form from "../form/Form";
import Footer from "../footer/Footer";
import Main from "../../pages/main/Main";
import { filters } from "../../mocks/filters";
import { promo } from "../../mocks/promo";
import { categories } from "../../mocks/categories";
import { favourites } from "../../mocks/favourites";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main className="App__main">
          <Form filters={ filters }/>

          <section className="page">
            <Main promoTitle={ promo.title }
                  promoMessage={ promo.message }
                  categoriesData={ { categories: categories } }
                  favouritesData={ { favourites: favourites } }/>
          </section>

        </main>
        <Footer />
      </div>
    );
  }
}

export default App;

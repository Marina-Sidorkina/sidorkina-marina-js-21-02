import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Form from "./components/form/Form";
import { filters } from "./mocks/filters";
import Promo from "./components/promo/Promo";
import { promo } from "./mocks/promo";
import Categories from "./components/categories/Categories";
import { categories } from "./mocks/categories";
import Favourite from "./components/favourite/Favourite";
import Footer from "./components/footer/Footer";
import { pianos } from "./mocks/pianos";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="App__main">
        <Form filters={ filters }/>

        <section className="page">
          <Promo title={ promo.title } message={ promo.message }/>
          <Categories categories={ categories }/>
          <Favourite favourites={ pianos }/>
        </section>

      </main>

      <Footer />
    </div>
  );
}

export default App;

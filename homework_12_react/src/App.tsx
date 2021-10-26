import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Form from "./components/form/Form";
import { filters } from "./mocks/filters";
import Footer from "./components/footer/Footer";
import Main from "./pages/main/Main";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main className="App__main">
          <Form filters={ filters }/>

          <section className="page">
            <Main />
          </section>

        </main>
        <Footer />
      </div>
    );
  }
}

export default App;

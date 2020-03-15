import React from "react";
import Quotes from "./Components/Quotes";
import Books from "./Components/Books";
import About from "./Components/About";
import Arwards from "./Components/Arwards";
import Footer from "./Components/Footer";
import { Container } from "reactstrap";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Marco Venturi - Pubblicazioni</h1>
      </header>

      <Container fluid>
        <br />
        <Quotes />
        <About />
        <hr />
        <Books />
        <hr />
        <Arwards />
        <Footer />
      </Container>
    </div>
  );
}

export default App;

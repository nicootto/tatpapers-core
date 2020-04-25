import React from "react";
import { Home } from "./Home";
import { Container } from "react-bootstrap";

import { Header } from "./Header/Header";

function App() {
  return (
    <Container style={{ height: "100vh" }}>
      <Header />
      <Home />
    </Container>
  );
}

export default App;

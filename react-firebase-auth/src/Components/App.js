import React from "react";
import SignUp from "./Auth/SignUp";
import { Container } from "react-bootstrap";
function App() {
  return (
    <Container className="align-items-center justify-content-center">    
      <div style ={{maxWidth: "400px"}}>
        <SignUp/>
      </div>
    </Container>
  );
}

export default App;

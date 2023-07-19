import React from "react";
import SignUp from "./Auth/SignUp";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../Contexts/AuthContext";
function App() {
  return (
    <AuthProvider>
      <Container className="align-items-center justify-content-center">    
        <div style ={{maxWidth: "400px"}}>
          <SignUp/>
        </div>
      </Container>
    </AuthProvider>

  );
}

export default App;

import React from "react";
import SignUp from "./Auth/SignUp";
import LogIn from "./Auth/LogIn";
import ForgotPassword from "../ForgotPassword";
import PrivateRoute from "./Auth/PrivateRoute";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../Contexts/AuthContext";
import {BrowserRouter as Router, Routes as Switch, Route} from "react-router-dom"
function App() {
  return (
      <Container className="align-items-center justify-content-center">    
        <div style ={{maxWidth: "400px"}}>
          <Router>
            <AuthProvider>
              <Switch>
                <Route exact path = "/"  element={<PrivateRoute></PrivateRoute>}/>
                <Route path="/signup" Component={SignUp}/>
                <Route path="/login" Component={LogIn}/>
                <Route path="/forgotpassword" Component={ForgotPassword}/>
              </Switch>
            </AuthProvider>
          </Router>
        </div>
      </Container>

  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import LoginForm from "./pages/LoginForm";
import SignUpForm from "./pages/SignUpForm";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <LoginForm />
        </Route>
        <Route path="/signup">
          <SignUpForm />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

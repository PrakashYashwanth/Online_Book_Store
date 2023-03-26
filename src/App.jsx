import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./components/atom/Login/Login";
import Footer from "./components/charges/Footer/Footer";
import NavBar from "./components/charges/NavBar/NavBar";
import SignUpModal from "./components/charges/SignUpModal/SignUpModal";
import "./App.scss";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
      </Switch>
      <Footer />
      <SignUpModal />
    </>
  );
}

export default App;

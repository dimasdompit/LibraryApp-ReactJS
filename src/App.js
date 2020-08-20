import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "moment-timezone";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Login from "./containers/pages/Login/Login";
import Register from "./containers/pages/Register/Register";
import BookDetails from "./containers/pages/BookDetails/BookDetails";
import Home from "./containers/pages/Home/Home";

import { connect } from "react-redux";

import "./App.css";
require("dotenv").config();

function App(props) {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/details/:id" component={BookDetails} />
        <Route path="/home" component={Home} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  book: state.book,
});

export default connect(mapStateToProps)(App);

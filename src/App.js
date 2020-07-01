import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "moment-timezone";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Login from "./containers/pages/Login/Login";
import Register from "./containers/pages/Register/Register";
import BookDetails from "./containers/pages/BookDetails/BookDetail";
import Home from "./containers/pages/Home/Home";

import "./App.css";

function App() {
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

export default App;

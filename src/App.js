import React from "react";
import About from "./Components/About";
import Shop from "./Components/Shop";
import Home from "./Components/Home";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container">
        <nav>
          <h4>
            <Link to="/">Home</Link>
          </h4>
          <ul className="nav-items">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <main>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/about" exact>
              <About />
            </Route>
            <Route path="/shop" exact>
              <Shop />
            </Route>
          </main>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

import React from "react";
import About from "./Components/About";
import Shop from "./Components/Shop";
import Home from "./Components/Home";
import ItemDetail from "./Components/ItemDetail";
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
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/shop" exact component={Shop} />
            <Route path="/shop/:id" component={ItemDetail} />
          </main>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

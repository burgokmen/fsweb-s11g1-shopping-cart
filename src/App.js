import React from "react";
import { Route } from "react-router-dom";

// Bileşenler
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  return (
    <div className="App">
      <Navigation cart={cart} />

      {/* Routelar */}
      <main className="content">
        <Route exact path="/">
          <Products />
        </Route>

        <Route path="/cart">
          <ShoppingCart cart={cart} />
        </Route>
      </main>
    </div>
  );
}

export default App;

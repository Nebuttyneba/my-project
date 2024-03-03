// App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Make sure this import is correct
import Header from "./components/Header";
import Home from "./components/Home";
import Cart from "./components/Cart";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Routes> {/* Use <Routes> instead of multiple <Route> */}
          <Route path="/" element={<Home />} /> {/* Nested inside <Routes> */}
          <Route path="/cart" element={<Cart />} /> {/* Nested inside <Routes> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

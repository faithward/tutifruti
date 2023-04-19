import { Navbar } from './navbar.js';
import { Home } from './pages/home.js';
import { About } from './pages/about.js';
import { Media } from './pages/media.js';
import { Donate } from './pages/donate.js';
import { Shop } from './pages/shop.js';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/media" element={<Media />} />
          <Route exact path="/donate" element={<Donate />} />
          <Route exact path="/shop" element={<Shop />} />
        </Routes>
        <header class="flex justify-center text-black px-5">
          <h1>Hello Tooti Froots</h1>
        </header>
      </BrowserRouter>
    </div>
  );
}

export default App;

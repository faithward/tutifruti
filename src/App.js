import { Navbar } from './navbar.js';
import { About } from './pages/about.js';
import { Media } from './pages/media.js';
import { Donate } from './pages/donate.js';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/media" element={<Media />} />
          <Route exact path="/donate" element={<Donate />} />
        </Routes>
        <header class="flex justify-center text-white px-5">
          <h1>Hello Tooti Froots</h1>
        </header>
      </BrowserRouter>
    </div>
  );
}

export default App;

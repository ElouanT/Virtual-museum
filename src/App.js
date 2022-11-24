import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Painting from "./pages/Painting";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/painting" element={<Painting/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

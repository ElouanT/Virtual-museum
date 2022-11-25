import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import PaintingPage from './pages/PaintingPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/painting" element={<PaintingPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

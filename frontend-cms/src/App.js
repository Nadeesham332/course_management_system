
import Home from "./pages/Home.js";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import React from 'react';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  
  );
}

export default App;

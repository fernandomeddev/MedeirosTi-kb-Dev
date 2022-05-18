import React from 'react';
import Home from './pages/HomePage/Home';
import Register from './pages/Register/Register';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;

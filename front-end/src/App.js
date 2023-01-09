
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages and components
import Home from './pages/Home';
import Renters from './pages/Renters';
import Navbar from './components/Navbar';
import Investors from './pages/Investors';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/renter"
              element={<Renters />}
            />
            <Route
              path="/investor"
              element={<Investors />}
            />
            
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

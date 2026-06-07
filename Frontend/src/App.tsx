import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './UserPages/Home';

const App = () => {
  return (
  <BrowserRouter>
  <Routes>

    {/* User Pages */}
    <Route path='/' element={<Home />} />

  </Routes>
  </BrowserRouter>
  );
};

export default App
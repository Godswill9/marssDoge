import React from "react";
import Header from "./Header";
import AboutPepe from "./pages/AboutPepe";
import Footer from "./pages/Footer";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Routes>
        <Route path={`/`} element={<HomePage/>}/>
        <Route path={`/about`} element={ <AboutPepe/>}/>
        </Routes>
        </BrowserRouter>
    
    </div>
  );
}

export default App;

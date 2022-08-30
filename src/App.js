import React from "react";
import AboutPepe from "./pages/AboutPepe";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Route, Routes} from 'react-router-dom';


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

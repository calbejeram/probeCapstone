import React from "react";
import { Route, Routes } from "react-router-dom";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/static/css/style_config.css';



import Lobby from './pages/Lobby';


function App() {
  return (
   <>
      <Routes>
        <Route path="/lobby" element={<Lobby />} />
      </Routes>
   </>
  );
}

export default App;

import React from "react";
import { Route, Routes } from "react-router-dom";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/static/css/lobby.css';
import '../src/static/css/user-dashboard.css';
import '../src/static/css/style_config.css';



import Lobby from './pages/Lobby';
import UserDashboard from './pages/UserDashboard';
import Register from "./pages/Register";
import MainGame from "./pages/MainGame";


function App() {
  return (
   <>
      <Routes>
        <Route path="/lobby" element={<Lobby />} />
        <Route path="/user" element={<UserDashboard />} />
        <Route path="/guest" element={<Register />} />
        <Route path="/game" element={<MainGame />} />
      </Routes>
   </>
  );
}

export default App;

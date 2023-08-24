import React from "react";
import { Route, Routes } from "react-router-dom";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/static/css/lobby.css';
import '../src/static/css/user-dashboard.css';
import '../src/static/css/style_config.css';



import Lobby from './pages/Lobby';
import UserDashboard from './pages/UserDashboard';
import CreateAvatar from "./pages/CreateAvatar";


function App() {
  return (
   <>
      <Routes>
        <Route path="/lobby" element={<Lobby />} />
        <Route path="/user" element={<UserDashboard />} />
        <Route path="/create" element={<CreateAvatar />} />
      </Routes>
   </>
  );
}

export default App;

import "./App.css";
import React, { useState } from "react";
import Home from "./Components/Home/Home";
import LoginForm from "./Components/Login/LoginForm";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Agents from "./Components/Agent/Agents";
import Criminals from "./Components/Criminal/Criminals";
import Documents from "./Components/Document/Documents";
import Message from "./Components/Message/Message";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LoginForm setUser={setUser} />}></Route>
          <Route path="/home" element={<Home user={user} />} />
          <Route path="/agents" element={<Agents />} />
          <Route path="/criminals" element={<Criminals />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/messages" element={<Message />} />
          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;

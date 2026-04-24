import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'
import { Home } from "./pages/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Forum } from "./pages/forum";
import { Login } from "./pages/login";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

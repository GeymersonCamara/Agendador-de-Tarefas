import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'
import { Home } from "./pages/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Forum } from "./pages/forum";
import { Login } from "./pages/login";
import { Cadastro } from "./pages/cadastro";
import { IndexInicio } from "./pages/index_inicio";
import { Perfil } from "./pages/perfil";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/" element={<IndexInicio />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

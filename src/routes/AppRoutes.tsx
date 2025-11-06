import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import FAQ from "../pages/Faq";
import Contato from "../pages/Contato";
import Integrantes from "../pages/Integrantes";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/integrantes" element={<Integrantes />} />
        {/* Rota dinâmica de exemplo */}
        <Route path="/detalhe/:id" element={<div>Detalhe da rota dinâmica</div>} />
        {/* Redirecionamento */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

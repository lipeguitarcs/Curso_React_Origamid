import React from 'react'
import { NavLink, Route, Routes, useLocation, useParams } from 'react-router-dom';
import ProdutoDescricao from './ProdutoDescricao';
import ProdutoAvaliacao from './ProdutoAvaliacao';
import ProdutoCustomizado from './ProdutoCustomizado';

const Produto = () => {
  const params = useParams();
  const location = useLocation();  

  const search = new URLSearchParams(location.search)
  console.log(search.get('memoria'))

  return (
    <div>
      <h1>Produto: {params.id}</h1>
      <nav>
        <NavLink to="">Descrição</NavLink>
        <NavLink to="avaliacao">Avaliação</NavLink>
        <NavLink to="customizado">Customizado</NavLink>
      </nav>
      <Routes>
        <Route path="" element={<ProdutoDescricao />} />
        <Route path="avaliacao" element={<ProdutoAvaliacao />} />
        <Route path="customizado" element={<ProdutoCustomizado />} />
      </Routes>
    </div>
  )
}

export default Produto
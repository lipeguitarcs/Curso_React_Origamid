import React from 'react'
import { GlobalContext } from './GlobalContext'

const Limpar = () => {
  const {limparDados} = React.useContaxt(GlobalContext);

  return (
    <button>Limpar</button>
  )
}

export default Limpar
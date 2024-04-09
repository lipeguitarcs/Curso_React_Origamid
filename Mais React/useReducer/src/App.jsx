import React from 'react'
import Exemplo from './Exemplo';

function reducer(state, action) {
  console.log(action);
  switch (action) {
    case 'AUMENTAR':
      return state + 1;
    case 'DIMINUIR':
      return state -1;
    default:
      throw new Error();
  }

  // if(action === 'aumentar') {

  //   return state + 1;
  // }
  // if(action === 'diminuir') {

  //   return state - 1;
  // }

  // return new Error('Erro action não existe')
}

const App = () => {
  const [state, dispatch] = React.useReducer(reducer, 0);

  // function aumentar() {
  //   setContar(contar + 1);
  // }
  // function diminuir() {
  //   setContar(contar -1)
  // }

  return (
    <div>
      <button onClick={() => dispatch('AUMENTAR')}>+</button>
      <button onClick={() => dispatch('DIMINUIR')}>-</button>
      <p>{state}</p>
      <Exemplo />
    </div>
  )
}

export default App
import React from 'react'

const App = () => {
  const [produto, setProduto] = React.useState('');
  const [cor, setCor] = React.useState('');

  function handleChange({target}) {
    setProduto(target.value);
  }

  return (
    <form>
      <h2>Cores</h2>
      <label>
        <input type="radio" value="azul" onChange={({target}) => setCor(target.value)} checked={cor === 'azul'} />
        Azul
      </label>
      <label>
        <input type="radio" value="verde" onChange={({target}) => setCor(target.value)} checked={cor === 'verde'} />
        Verde
      </label>

      <h2>Produtos</h2>
      <label>
        <input type="radio" value="smartphone" onChange={handleChange} checked={produto === 'smartphone'} />
        Smartphone
      </label>
      <label>
        <input type="radio" value="notebook" onChange={handleChange} checked={produto === 'notebook'} />
        Notebook
      </label>
    </form>
  )
}

export default App
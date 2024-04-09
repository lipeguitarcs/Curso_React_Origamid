import React from 'react'

const App = () => {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');


  function handleSubmit(e) {
    event.preventDefault();
    console.log(e);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome</label>
      <input id="nome" type="text" value={nome} name="nome" onChange={(e) => setNome(e.target.value)}/>

      <label htmlFor="email">Email</label>
      <input id="email" type="email" value={email} name="email" onChange={(e) => setEmail(e.target.value)}/>
      <button>Enviar</button>
    </form>
  )
}

// export default App
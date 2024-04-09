import React from 'react'

const App = () => {
  const [form, setForm] = React.useState({
    nome: '',
    email: '',
  })


  function handleSubmit(e) {
    event.preventDefault();
    console.log(e);
  }

  function handleChange({target}) {
    const {id, value} = target;
    console.log(id, value);
    setForm({ ...form, [id]: value});
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome</label>
      <input id="nome" type="text" value={form.nome} name="nome" onChange={handleChange}/>
      {form.nome}

      <label htmlFor="email">Email</label>
      <input id="email" type="email" value={form.email} name="email" onChange={handleChange}/>
      {form.email}
      <hr />

      <button>Enviar</button>
    </form>
  )
}

export default App
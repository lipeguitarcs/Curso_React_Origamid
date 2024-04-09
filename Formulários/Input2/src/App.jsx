import React from 'react'

const App = () => {
  const formFields = [
    {
      id: 'nome',
      label: 'Nome',
      type: 'text',
    },
    {
      id: 'email',
      label: 'Email',
      type: 'email',
    },
    {
      id: 'senha',
      label: 'Senha',
      type: 'password',
    },
    {
      id: 'cep',
      label: 'Cep',
      type: 'text',
    },
    {
      id: 'rua',
      label: 'Rua',
      type: 'text',
    },
    {
      id: 'numero',
      label: 'Numero',
      type: 'text',
    },
    {
      id: 'bairro',
      label: 'Bairro',
      type: 'text',
    },
    {
      id: 'cidade',
      label: 'Cidade',
      type: 'text',
    },
    {
      id: 'estado',
      label: 'Estado',
      type: 'text',
    },
  ]

  const [form, setForm] = React.useState(formFields.reduce((acc, field) => {
    console.log(acc);
    return {
      ...acc,
      [field.id]: '',
    };
  }, {}));

  const [response, setResponse] = React.useState(null);


  function handleChange({target}) {
    const {id, value} = target;
    setForm({...form, [id]: value});
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch('https://ranekapi.origamid.dev/json/api/usuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    }).then(response => {
      setResponse(response);
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      {formFields.map(({id, label, type}) => ( <div key={id}>
        <label htmlFor={id}>{label}</label>
        <input type={type} id={id} value={form[id]} onChange={handleChange} />
      </div>))}
      {response && response.ok && <p>Formulário Enviado</p>}
      <button>Enviar</button>
    </form>
  )
}

export default App
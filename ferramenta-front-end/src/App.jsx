import React from 'react'
import ButtonModal from './ButtonModal';
import Modal from './Modal';

const App = () => {
  const [contar, setContar] = React.useState(true);
  const [items, setItems] = React.useState(['Item 1']);

  function handleClick() {
    setContar((contar) => {
      setItems((items) => [...items, 'Item ' + (contar + 1)])
      return contar + 1;
    })
  }

  return (
    <div>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
      <button onClick={handleClick}>Clicar</button>
    </div>
  )
}

export default App
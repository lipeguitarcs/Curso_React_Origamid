import React from 'react'

const App = () => {
  const [contar, setContar] = React.useState(0);

  React.useEffect(() => {
    console.log('Executou');
  }, [])

  const total = 'Total ';
  React.useEffect(() => {
    document.title = total + contar;
  }, [contar])

  return (
    <button onClick={() => setContar(contar + 1)}>
      {contar}
    </button>
  )
}

// export default App
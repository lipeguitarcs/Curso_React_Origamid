import React from 'react'
import Card from 'react-bootstrap/Card'

const App = () => {


  return (
    // <div className="card bg-dark text-white m-5" style={{maxWidth: "18rem" }}>
    //   <div className="card-header">Notebook</div>
    //   <div className="card-body">
    //     <h5 className="card-title">R$ 2500</h5>
    //     <p className="card-text">Esse é um notebook com 1TB, 16GB de RAM e placa de vídeo de 16GB</p>
    //   </div>
    // </div>

    <Card bg="dark" text="white" className="m-5" style={{maxWidth: '18rem'}}>
      <Card.Header>Notebook</Card.Header>
      <Card.Body>
        <Card.Title>R$ 2500</Card.Title>
        <Card.Text>Esse é um notebook com 1TB, 16GB de RAM e placa de vídeo de 16GB</Card.Text>
      </Card.Body>
    </Card>
  )
};

export default App;
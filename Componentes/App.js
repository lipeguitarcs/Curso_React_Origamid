import React, { Fragment } from 'react';
import Header from './Header';
import Footer from './Footer';
import Form from './Form/Form';

const Teste = () => {
  const active = false;
  if (active) {
    return <p>Teste</p>;
  } else {
    return null;
  }
}

const App = () => {
  return (
  <div>
    <Fragment>
      <Teste />
      <Header />
      <Form />
      <Footer />
    </Fragment>
  </div>
  );
};

export default App;
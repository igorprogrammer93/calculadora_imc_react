import React, { useState } from 'react';
import { Form } from './components/Form';
import { Result } from './components/Result';

const App = () => {
  const [imc, setIMC] = useState(null);

  return (
    <div>
      <h1 style={{ textAlign: 'center', margin: '20px' }}>Calculadora de IMC</h1>
      <Form onCalculate={setIMC} />
      {imc && <Result imc={imc} />}
    </div>
  );
};

export default App;


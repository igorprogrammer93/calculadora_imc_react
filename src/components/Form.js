import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: #f9f9f9;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #45a049;
  }
`;

export const Form = ({ onCalculate }) => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (height && weight) {
      const imc = (weight / (height * height)).toFixed(2);
      onCalculate(imc);
    }
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <label>Altura (m):</label>
        <Input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          step="0.01"
          required
        />
        <label>Peso (kg):</label>
        <Input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          required
        />
        <Button type="submit">Calcular IMC</Button>
      </form>
    </FormContainer>
  );
};

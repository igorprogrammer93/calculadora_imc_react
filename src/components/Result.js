import React from 'react';
import styled from 'styled-components';

const ResultContainer = styled.div`
  text-align: center;
  margin-top: 20px;
  font-size: 18px;
`;

export const Result = ({ imc }) => {
  const classifyIMC = (imc) => {
    if (imc < 18.5) return 'Abaixo do peso';
    if (imc < 24.9) return 'Peso normal';
    if (imc < 29.9) return 'Sobrepeso';
    if (imc < 34.9) return 'Obesidade grau I';
    if (imc < 39.9) return 'Obesidade grau II';
    return 'Obesidade grau III';
  };

  return (
    <ResultContainer>
      <h3>Seu IMC: {imc}</h3>
      <p>Classificação: {classifyIMC(imc)}</p>
    </ResultContainer>
  );
};


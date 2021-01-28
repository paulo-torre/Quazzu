import React from 'react';
import styled from 'styled-components';

const InputBase = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 2px solid ${ ({ theme }) => theme.colors.azulEscuro };
  color: black;
  background-color: #eef;
  border-radius: ${ ({ theme }) => theme.borderRadius };
  outline: none;
  margin-bottom: 25px;
  text-align: center;
  &:focus {
    border: 2px solid ${ ({ theme }) => theme.colors.azul };
  }
`;

export default function Input({ onChange, placeholder, ...props }) {
  return (
    <div>
      <InputBase
        onChange={ onChange }
        placeholder={ placeholder }
        { ...props }
      />
    </div>
  );  
}
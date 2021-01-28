import React from 'react';
import styled from 'styled-components';

const InputBase = styled.input`
  width: 100%;
  padding: 15px;
  font-size: 14px;
  border: 2px solid ${ ({ theme }) => theme.colors.azulEscuro };
  color: ${ ({ theme }) => theme.colors.text };
  background-color: ${ ({ theme }) => theme.colors.mainBg };
  border-radius: ${ ({ theme }) => theme.borderRadius };
  outline: none;
  margin-bottom: 25px;
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
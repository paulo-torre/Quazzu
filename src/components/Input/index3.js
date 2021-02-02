import React from 'react';
import styled from 'styled-components';

const InputBase3 = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 2px solid ${ ({ theme }) => theme.colors.verde };
  color: black;
  background-color: #eef;
  border-radius: ${ ({ theme }) => theme.borderRadius };
  outline: none;
  margin-bottom: 25px;
  text-align: center;
  &:focus {
    border: 2px solid ${ ({ theme }) => theme.colors.verdeClaro};
  }
`;

export default function Input3({ onChange, placeholder, ...props }) {
  return (
    <div>
      <InputBase3
        onChange={ onChange }
        placeholder={ placeholder }
        { ...props }
      />
    </div>
  );  
}
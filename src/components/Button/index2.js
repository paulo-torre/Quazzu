import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button2 = styled.button`
  background-color: transparent;
  color: ${ ({ theme }) => theme.colors.vermelhoClaro };
  border: 2px solid ${ ({ theme }) => theme.colors.vermelhoClaro };
  border-radius: ${ ({ theme }) => theme.borderRadius };

  width: 100%;
  padding: 10px 16px;
  font-size: 14px;
  font-weight: bold;
  line-height: 1;
  text-transform: uppercase;
  outline: none;
  transition: .3s;
  margin-top: 10px;
  cursor: pointer;
  transition: all .3s;

  &:hover {
    background-color: ${ ({ theme }) => theme.colors.vermelho };
    color: ${ ({ theme }) => theme.colors.text };
    border: 2px solid ${ ({ theme }) => theme.colors.vermelho};
  }
  &:disabled {
    border: 2px solid transparent;
    color: transparent;
    background: transparent;
    cursor: default;
  }
`;

export default Button2;
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button3 = styled.button`
  background-color: transparent;
  color: ${ ({ theme }) => theme.colors.verdeClaro };
  border: 2px solid ${ ({ theme }) => theme.colors.verdeClaro };
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
    background-color: ${ ({ theme }) => theme.colors.verdeClaro };
    text-shadow: 0px 0px 4px #0009;
    color: ${ ({ theme }) => theme.colors.text };
  }
  &:disabled {
    border: 2px solid transparent;
    color: transparent;
    background: transparent;
    cursor: default;
    text-shadow: 0px 0px 4px #0000;
  }
`;

export default Button3;
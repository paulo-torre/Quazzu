import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  background-color: ${ ({ theme }) => theme.colors.azul };
  color: ${ ({ theme }) => theme.colors.text };
  border: 0;
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

  &:hover {
    opacity: .5;
  }
  &:disabled {
    display: none;
  }
`;

export default Button;
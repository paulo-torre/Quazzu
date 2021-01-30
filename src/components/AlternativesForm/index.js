import styled from 'styled-components';

const AlternativesForm = styled.form `
  label {
    &[data-selected = "true"] {
      background-color: #88f;
      text-shadow: 2px 2px 5px #0009;
      &:hover {
        width: 96%;
        opacity: 1;
        cursor: default;
      }
      
      &[data-status = "SUCESS"] {
        background-color: ${ ({ theme }) => theme.colors.sucess};
      }

      &[data-status = "ERROR"] {
        background-color: ${ ({ theme }) => theme.colors.vermelho};
      }
    }

    &:focus {
      opacity: 1;
    }
  }

  button {
    margin-top: 24px;
  }
`;

export default AlternativesForm
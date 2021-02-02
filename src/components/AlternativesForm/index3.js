import styled from 'styled-components';

const AlternativesForm3 = styled.form `
  label {
    &[data-selected = "true"] {
      background-color: ${ ({ theme }) => theme.colors.verde };
      text-shadow: 2px 2px 5px #0009;
      &:hover {
        width: 96%;
        opacity: 1;
        cursor: default;
      }
      
      &[data-status = "SUCESS"] {
        background-color: ${ ({ theme }) => theme.colors.sucess};
        width: 100%;
        font-weight: bold;
        padding-top: 11px;
        padding-bottom: 11px;
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

export default AlternativesForm3;
import styled from "styled-components";

const Loader2 = styled.div`
  border: 5px solid rgba( 60, 60, 60, .6 );
  border-left-color: ${ ({ theme }) => theme.colors.azul };
  height: 32px;
  width: 32px;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-right: auto;
  margin-left: auto;

  @keyframes spin {
    to { transform: rotate( 360deg ); }
  }
`;

export default Loader2;
import styled from "styled-components";

const Loader = styled.div`
  border: 5px solid rgba( 0, 0, 0, .2 );
  border-left-color: ${ ({ theme }) => theme.colors.mainBg };
  height: 30px;
  width: 30px;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to { transform: rotate( 360deg ); }
  }
`;

export default Loader;
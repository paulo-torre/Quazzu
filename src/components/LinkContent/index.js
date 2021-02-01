import styled from 'styled-components';

const LinkContent = styled.div`
  box-shadow: 0px 0px 7px #0009;;
  border-radius: ${ ({ theme }) => theme.borderRadius };
  color: ${ ({ theme }) => theme.colors.mainBg };
  background-color: #ccf;
  padding: 22px 22px 22px 22px;
  cursor: default;
  font-weight: 700;
  font-size: 18px;
  font-family: 'Roboto', sans-serif;
  text-shadow: none;

  a {
    cursor: text;
    font-size: 15px;
    font-weight: normal;
  }
`;

export default LinkContent;
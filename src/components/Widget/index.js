import styled from 'styled-components';

const Widget = styled.div`
  margin-top: 0px;
  margin-bottom: 24px;
  border: 1px solid ${ ({ theme }) => theme.colors.azulEscuro };
  background-color: ${ ({ theme }) => theme.colors.mainBg };
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0px 0px 7px #0009;

  h1 {
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-weight: 700;
    line-height: 1;
    cursor: default;
  }
  h2 {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 1;
    margin-top: 0px;
    margin-bottom: 15px;
    cursor: default;
  }
  p {
    font-size: 17px;
    font-weight: 400;
    line-height: 1;
    margin-top: 9px;
    text-align: start;
    cursor: default;
    margin-bottom: 35px;
  }
`;

Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: ${ ({ theme }) => theme.colors.azul };

  * {
    margin: 0;
  }
`;

Widget.Content = styled.div`
  padding: 32px 32px 32px 32px;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
`;

Widget.Topic = styled.a`
  outline: none;
  width: 96%;
  text-decoration: none;
  color: ${ ({ theme }) => theme.colors.text };
  background-color: #2461a7;
  padding: 10px 15px;
  margin-bottom: 10px;
  cursor: pointer;
  border-radius: ${ ({ theme }) => theme.borderRadius };
  transition: all .3s;
  display: block;
  text-shadow: 0px 0px 0px transparent;

  &:hover,
  &:focus {
    background-color: ${ ({ theme }) => theme.colors.azul};
    width: 100%;
    opacity: .8;
  }
`;

export default Widget;
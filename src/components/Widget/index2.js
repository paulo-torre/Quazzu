import styled from 'styled-components';

const Widget2 = styled.div`
  margin-top: 0px;
  margin-bottom: 24px;
  border: 1px solid ${ ({ theme }) => theme.colors.vermelhoEscuro };
  background-color: ${ ({ theme }) => theme.colors.mainBg2 };
  border-radius: 5px;
  overflow: hidden;

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
  }

  h3 {
    font-size: 17px;
    font-weight: 400;
    line-height: 1;
    margin-top: 9px;
    text-align: start;
    cursor: default;
    margin-bottom: 35px;
  }
`;

Widget2.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: ${ ({ theme }) => theme.colors.vermelho };

  * {
    margin: 0;
  }
`;

Widget2.Content = styled.div`
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

Widget2.Topic = styled.a`
  outline: none;
  width: 96%;
  text-decoration: none;
  color: ${ ({ theme }) => theme.colors.text };
  background-color: ${ ({ theme }) => theme.colors.vermelhoEscuro }90;
  padding: 10px 15px;
  margin-bottom: 10px;
  cursor: pointer;
  border-radius: ${ ({ theme }) => theme.borderRadius };
  transition: all .3s;
  display: block;
  text-shadow: 0px 0px 0px transparent;

  &:hover,
  &:focus {
    background-color: ${ ({ theme }) => theme.colors.vermelhoEscuro };
    width: 100%;
    opacity: .8;
  }
`;

Widget2.Topic2 = styled.button`
  font-size: 15.2px;
  outline: none;
  width: 100%;
  text-align: start;
  border: 2px solid ${ ({ theme }) => theme.colors.vermelhoClaro };
  text-decoration: none;
  color: ${ ({ theme }) => theme.colors.vermelhoClaro };
  background-color: transparent;
  padding: 10px 15px;
  margin-top: 15px;
  cursor: pointer;
  border-radius: ${ ({ theme }) => theme.borderRadius };
  transition: all .3s;
  display: block;
  text-shadow: 0px 0px 0px transparent;

  &:hover {
    background-color: ${ ({ theme }) => theme.colors.vermelho};
    color: white;
    border: 2px solid ${ ({ theme }) => theme.colors.vermelho};
  }
`;

export default Widget2;
import React from 'react';
import styled from 'styled-components'
import Head from 'next/head';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

import db from'../db.json';
import Widget2 from '../src/components/Widget/index2';
import GitHubCorner2 from '../src/components/GitHubCorner/index2';
import QuizBackground from "../src/components/QuizBackground/index";
import QuizLogo from '../src/components/QuizLogo';
import Input2 from '../src/components/Input/index2';
import Button2 from '../src/components/Button/index2';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function cobraKaiPage() {
  const router = useRouter(); 
  const [ name, setName ] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg2}>
      <Head>
        <title>Quazzu? - Cobra Kai</title>
      </Head>

      <QuizContainer>
        <QuizLogo />

        <Widget2>
          <Widget2.Header>
            <h1>Você conhece Cobra Kai ? <p>Vamos ver!</p> </h1>
          </Widget2.Header>

          <Widget2.Content>
            <form onSubmit={ function ( infosDoEvento ) {
              infosDoEvento.preventDefault();
              router.push(`/cobrakai=quiz?name=${name}`);
            }}>

              <center><h2>Escreva seu nome:</h2></center>
              
              <Input2
                name="nomeDoUsuario"
                onChange={ ( infosDoEvento ) => setName(infosDoEvento.target.value)}
                placeholder="Mínimo de 3 letras" 
                value={ name }
              />

              <Button2 type="submit" disabled={name.length < 3}>
                {`Vamos Jogar, ${name}!`}
              </Button2>
            </form>
          </Widget2.Content>
        </Widget2>

        <Widget2>
          <Widget2.Content>
            <h1>Outros Quizes:</h1>

            <ul>

              <form onSubmit={ function ( infosDoEvento ) {
                  infosDoEvento.preventDefault();
                  router.push(`/`);
              }}>
                <li>
                  <Widget2.Topic2 type='Submit'>
                    {db.external1.css}
                  </Widget2.Topic2>
                </li>
              </form>

              <form onSubmit={ function ( infosDoEvento ) {
                  infosDoEvento.preventDefault();
                  router.push(`/minecraft?home`);
              }}>
                <li>
                  <Widget2.Topic2>
                    {db.external.minecraft}
                  </Widget2.Topic2>
                </li>
              </form>

              <form onSubmit={ function ( infosDoEvento ) {
                  infosDoEvento.preventDefault();
                  router.push(`/javascript?home`);
              }}>
                <li>
                  <Widget2.Topic2>
                    {db.external.javaScript}
                  </Widget2.Topic2>
                </li>
              </form>

              <form onSubmit={ function ( infosDoEvento ) {
                  infosDoEvento.preventDefault();
                  router.push(`/animais?home`);
              }}>
                <li>
                  <Widget2.Topic2>
                    {db.external.animais}
                  </Widget2.Topic2>
                </li>
              </form>

            </ul>
          </Widget2.Content>
        </Widget2>

      </QuizContainer>
      <GitHubCorner2 projectUrl="https://github.com/paulo-torre" />
      {/* <Footer /> */}
    </QuizBackground>
  );
}

Input2.defaultProps = {
  value: '',
};

Input2.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
}
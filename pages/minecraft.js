import React from 'react';
import styled from 'styled-components'
import Head from 'next/head';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

import db from'../db.json';
import Widget3 from '../src/components/Widget/index3';
import GitHubCorner3 from '../src/components/GitHubCorner/index3';
import QuizBackground from "../src/components/QuizBackground/index";
import QuizLogo from '../src/components/QuizLogo';
import Input3 from '../src/components/Input/index3';
import Button3 from '../src/components/Button/index3';

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
    <QuizBackground backgroundImage={db.bg3}>
      <Head>
        <title>Quazzu? - Minecraft</title>
      </Head>

      <QuizContainer>
        <QuizLogo />

        <Widget3>
          <Widget3.Header>
            <h1>Você sabe de Minecraft ? <p>Vamos ver!</p> </h1>
          </Widget3.Header>

          <Widget3.Content>
            <form onSubmit={ function ( infosDoEvento ) {
              infosDoEvento.preventDefault();
              router.push(`/minecraft=quiz?name=${name}`);
            }}>

              <center><h2>Escreva seu nome:</h2></center>
              
              <Input3
                name="nomeDoUsuario"
                onChange={ ( infosDoEvento ) => setName(infosDoEvento.target.value)}
                placeholder="Mínimo de 3 letras" 
                value={ name }
              />

              <Button3 type="submit" disabled={name.length < 3}>
                {`Vamos Jogar, ${name}!`}
              </Button3>
            </form>
          </Widget3.Content>
        </Widget3>

        <Widget3>
          <Widget3.Content>
            <h1>Outros Quizes:</h1>

            <ul>

              <form onSubmit={ function ( infosDoEvento ) {
                  infosDoEvento.preventDefault();
                  router.push(`/`);
              }}>
                <li>
                  <Widget3.Topic2 type='Submit'>
                    {db.external1.css}
                  </Widget3.Topic2>
                </li>
              </form>

              <form onSubmit={ function ( infosDoEvento ) {
                  infosDoEvento.preventDefault();
                  router.push(`/cobrakai?home`);
              }}>
                <li>
                  <Widget3.Topic2>
                    {db.external.cobraKai}
                  </Widget3.Topic2>
                </li>
              </form>

              <form onSubmit={ function ( infosDoEvento ) {
                  infosDoEvento.preventDefault();
                  router.push(`/javascript?home`);
              }}>
                <li>
                  <Widget3.Topic2>
                    {db.external.javaScript}
                  </Widget3.Topic2>
                </li>
              </form>

              <form onSubmit={ function ( infosDoEvento ) {
                  infosDoEvento.preventDefault();
                  router.push(`/animais?home`);
              }}>
                <li>
                  <Widget3.Topic2>
                    {db.external.animais}
                  </Widget3.Topic2>
                </li>
              </form>

            </ul>
          </Widget3.Content>
        </Widget3>

      </QuizContainer>
      <GitHubCorner3 projectUrl="https://github.com/paulo-torre" />
      {/* <Footer /> */}
    </QuizBackground>
  );
}

Input3.defaultProps = {
  value: '',
};

Input3.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
}
import React from 'react';
import styled from 'styled-components'
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from'../db.json';
import Widget from '../src/components/Widget/index';
import Footer from '../src/components/Footer/index';
import GitHubCorner from '../src/components/GitHubCorner/index';
import QuizBackground from "../src/components/QuizBackground/index";
import QuizLogo from '../src/components/QuizLogo';
import Input from '../src/components/Input/index';

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

export default function Home() {
  const router = useRouter(); 
  const [ name, setName ] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <link rel="shortcut icon" href="../src/components/Icone/favicon.ico" />
        <title>Quazzu?</title>
      </Head>

      <QuizContainer>
        <QuizLogo />

        <Widget>
          <Widget.Header>
            <h1>Você é bom em CSS ? <p>Vamos ver!</p> </h1>
          </Widget.Header>

          <Widget.Content>
            <form onSubmit={ function ( infosDoEvento ) {
              infosDoEvento.preventDefault();
              router.push(`/quiz?name=${name}`);
            }}>
              <Input
                onChange={ ( infosDoEvento ) => setName(infosDoEvento.target.value)}

                placeholder="Escreva seu nome     Mínimo de 3 letras" 
              />

              <button type="submit" disabled={name.length < 3}>
                Vamos jogar, {name}!
              </button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da galera</h1>

            <p>Em Breve...</p>
          </Widget.Content>
        </Widget>

      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/paulo-torre" />
      <Footer />
    </QuizBackground>
  );
}

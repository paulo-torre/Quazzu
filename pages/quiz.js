import React from 'react';
import { QuizContainer } from './index';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import Widget from '../src/components/Widget';
import db from '../db.json';
import Button from '../src/components/Button';
import Loader from '../src/components/Loader/index';
import Loader2 from '../src/components/Loader/index2';
import AlternativesForm from '../src/components/AlternativesForm';
import LinkContent from '../src/components/LinkContent';
import Head from 'next/head';

function ResultWidget({ results }) {
  return (
    <>
      <Head>
        <title>Quazzu? - Resultado</title>
      </Head>

      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Content>
              {/* {results.map( (result, index) => {
                <ul>
                  <li key={`result__${ result }`}> 
                    #0{index + 1} 
                    {result === true 
                      ? 'Acertou' 
                      : 'Errou'
                    } 
                  </li>
                </ul>
              })}
            */}
            <h1>
              Parabéns!
              <br />
              <br />
              Você acertou:
              {' '}
              {results.filter((x) => x).length}
              {' '}
              {results.filter((x) => x).length < 2 && 'questão!'}
              {results.filter((x) => x).length > 1 && 'questões!'}
            </h1>
          </Widget.Content>
        </Widget>
        
        <LinkContent>
          Mande esse link para seus amigos, e veja se eles sabem de CSS!
          <br />
          {''}
          <br /> 

          <a>
            https://quazzu.vercel.app
          </a>
        </LinkContent>

      </QuizContainer>
    </>
  );
}

function LoadingWidget() {
  return (
    <>
      <Head>
        <title>Carregando...</title>
      </Head>

      <Widget>
        <Widget.Header>
          <Loader />
        </Widget.Header>

        <Widget.Content>
          <Loader2 />
        </Widget.Content>
      </Widget>
    </>
  );
}

function QuestionWidget({ question, totalQuestions, questionIndex, onSubmit, addResult }) {
  const [ isQuestionsSubmited, setIsQuestionsSubmited ] = React.useState(false);
  const [ selectedAlternative, setSelectedAlternative ] = React.useState(undefined);
  const questionId = `question__${questionIndex}`;
  const isCorrect = selectedAlternative === question.answer;
  const hasAlternativeSelected = selectedAlternative !== undefined;

  return (
    <>
      <Head>
        <title>Quazzu?</title>
      </Head>

      <Widget>
        <Widget.Header>
          <h1>
            {`Pergunta ${questionIndex + 1} / ${totalQuestions}`}
          </h1>
        </Widget.Header>
            
        <Widget.Content>
          <h1>  
            { question.title }
          </h1>

          <h3>
            { question.description }
          </h3>

          <AlternativesForm onSubmit={ ( infosDoEvento ) => {
            infosDoEvento.preventDefault();
            setIsQuestionsSubmited(true);
            setTimeout(() => {
              addResult(isCorrect);
              onSubmit();
              setIsQuestionsSubmited(false);
              setSelectedAlternative(undefined);
            }, 2 * 1000);
          }}>

            {question.alternatives.map( ( alternative, alternativeIndex ) => {
              const alternativeId = `alternative__${alternativeIndex}`;
              const alternativeStatus = isCorrect ? 'SUCESS' : 'ERROR';
              const isSelected = selectedAlternative === alternativeIndex;

              return (
                <center>
                  <Widget.Topic
                    as="label" 
                    key={alternativeId}
                    htmlFor={alternativeId}
                    data-selected={isSelected}
                    data-status={isQuestionsSubmited && alternativeStatus}
                  >

                <input 
                    style={{ 
                      display: 'none',
                      cursor: 'pointer',
                    }}
                    name={ questionId }
                    id={ alternativeId }
                    onChange={ () => setSelectedAlternative(alternativeIndex) }
                    type="radio"
                  />
                  {alternative}
                </Widget.Topic>
              </center>
              );
            })}

            <Button type="submit" disabled={ !hasAlternativeSelected }>
              Confirmar 
            </Button>
          </AlternativesForm>

        </Widget.Content>
      </Widget>
    </>
  );
}

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
}

export default function QuizPage() {
  const [ results, setResults ] = React.useState([]);
  const [ screenState, setScreenState ] = React.useState(screenStates.LOADING);
  const [ currentQuestion, setCurrentQuestion ] = React.useState(0);
  const totalQuestions = db.questions.length;
  const questionIndex = currentQuestion;
  const question = db.questions[ questionIndex ];

  function addResult( result ) {
    setResults([
      ...results,
      result,
    ]);
  }
  
  React.useEffect( () => {
    setTimeout( () => {
      setScreenState( screenStates.QUIZ );
    }, 1,6 * 1000);
  }, [] );

  function handleSubmitQuiz(  ) {
    const nextQuestion = questionIndex + 1;
    if( nextQuestion < totalQuestions ) {
      setCurrentQuestion(questionIndex + 1);
    } else {
      setScreenState(screenStates.RESULT);
    }
  }

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>

        { screenState === screenStates.QUIZ && 
          <QuestionWidget 
            question={question} 
            totalQuestions={totalQuestions} 
            questionIndex={questionIndex} 
            onSubmit={handleSubmitQuiz} 
            addResult={addResult}
          />}
        
        { screenState === screenStates.LOADING && <LoadingWidget />}

        { screenState === screenStates.RESULT && <ResultWidget results={results} />}

      </QuizContainer>
    </QuizBackground>
  );
}
import React from 'react';
import { QuizContainer } from './index';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import Widget from '../src/components/Widget';
import db from '../db.json';
import Button from '../src/components/Button';
import Loader from '../src/components/Loader/index';
import Loader2 from '../src/components/Loader/index2';
import next from 'next';

function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>
        <Loader />
      </Widget.Header>

      <Widget.Content>
        <Loader2 />
      </Widget.Content>
    </Widget>
  );
}

function QuestionWidget({ question, totalQuestions, questionIndex, onSubmit }) {
  const questionId = `question__${questionIndex}`;

  return (
    <Widget>
      <Widget.Header>
        <h3>
          {`Pergunta ${questionIndex + 1} / ${totalQuestions}`}
        </h3>
      </Widget.Header>

      <img 
        alt="Descricao"
        style = {{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
        }}

        src={ question.image }
      />
          
      <Widget.Content>
        <h2>
          { question.title }
        </h2>

        <p>
          { question.description }
        </p>

        <form onSubmit={ ( infosDoEvento ) => {
          infosDoEvento.preventDefault();
          onSubmit();
        }}>
          {question.alternatives.map( ( alternative, alternativeIndex ) => {
            const alternativeId = `alternative__${alternativeIndex}`;

            return (
              <center>
                <Widget.Topic
                  as="label" 
                  htmlFor={alternativeId}
                >
              <input 
                style={{ display: 'none' }}
                name={questionId}
                id={ alternativeId }
                type="radio"
                />
                {alternative}
              </Widget.Topic>
            </center>
            );
          })}

          <Button type="submit">
            Confirmar 
          </Button>
        </form>

      </Widget.Content>
    </Widget>
  );
}

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
}

export default function QuizPage() {
  const [ screenState, setScreenState ] = React.useState(screenStates.LOADING);
  const [ currentQuestion, setCurrentQuestion ] = React.useState(0);
  const totalQuestions = db.questions.length;
  const questionIndex = currentQuestion;
  const question = db.questions[ questionIndex ];
  
  React.useEffect( () => {
    setTimeout( () => {
      setScreenState( screenStates.QUIZ );
    }, 1 * 1200);
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

        { screenState === screenStates.QUIZ && <QuestionWidget question={question} totalQuestions={totalQuestions} questionIndex={questionIndex} onSubmit={handleSubmitQuiz} />}
        
        { screenState === screenStates.LOADING && <LoadingWidget />}

        { screenState === screenStates.RESULT && <div>Você acertou X questões, PARABÉNS !!!</div>}

      </QuizContainer>
    </QuizBackground>
  );
}
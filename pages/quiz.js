import React from 'react';
import { QuizContainer } from './index';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import Widget from '../src/components/Widget';
import db from '../db.json';
import Button from '../src/components/Button';
import Loader from '../src/components/Loader/index';
import Loader2 from '../src/components/Loader/index2';

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

function QuestionWidget({ question, totalQuestions, questionIndex }) {
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

        <form>
          {question.alternatives.map( ( alternative, alternativeIndex ) => {
            const alternativeId = `alternative__${alternativeIndex}`;

            return (
              <center>
                <Widget.Topic
                  as="label" 
                  htmlFor={alternativeId}
                >
              <input 
                name={questionId}
                id={ alternativeId }
                type="radio"
                />
                {alternative}
              </Widget.Topic>
            </center>
            );
          })}

          <Button>
            Confirmar 
          </Button>
        </form>

      </Widget.Content>
    </Widget>
  );
}

export default function QuizPage() {
  const totalQuestions = db.questions.length;
  const questionIndex = 1;
  const question = db.questions[ questionIndex ];

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />

        <QuestionWidget question={question} totalQuestions={totalQuestions} questionIndex={questionIndex} />
        <LoadingWidget />
      </QuizContainer>
    </QuizBackground>
  );
}
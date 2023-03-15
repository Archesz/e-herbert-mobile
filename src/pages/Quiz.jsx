import React, { useState } from 'react';
import '../styles/quiz.scss';
import Menu from '../components/Menu/Menu'

function Quiz(props) {
  let questions = props.questions
  let data = props.data
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState(null);

  const handleAnswerSelected = (answer) => {
    setUserAnswer(answer);
  };

  const handleNextQuestion = () => {
    const isCorrect = userAnswer === questions[currentQuestion].answer;
    setCurrentQuestion(currentQuestion + 1);
    setUserAnswer(null);
    if (isCorrect) {
      alert('Resposta correta!');
    } else {
      alert('Resposta incorreta. Tente novamente.');
    }
  };

  const renderQuestion = (question, index) => {
    return (
        <div key={index}>
          <h2>{question.text}</h2>
          {question.options.map((option, index) => (
            <label key={index}>
              <input
                type="radio"
                value={option}
                checked={userAnswer === option}
                onChange={() => handleAnswerSelected(option)}
              />
              {option}
            </label>
          ))}
      </div>
    );
  };

  return (
    <div className='quiz-container'>
      <Menu data={data} />
      <div className="quiz">
        {currentQuestion < questions.length ? (
          <>
            {renderQuestion(questions[currentQuestion], currentQuestion)}
            <button disabled={!userAnswer} onClick={handleNextQuestion}>
              Próxima questão
            </button>
          </>
        ) : (
          <h2>Quiz concluído!</h2>
        )}
      </div>
    </div>
  );
};

export default Quiz;

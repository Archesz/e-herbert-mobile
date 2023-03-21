import React, { useState } from 'react';
import '../styles/quiz.scss';
import Menu from '../components/Menu/Menu'

function openQuiz(){
  let quiz = document.querySelector("#quiz")
  let form = document.querySelector("#form")
  quiz.style.display = "flex"
  form.style.display = "none"
}

function Quiz(props) {
  let questions = props.questions
  const objetoSerializado = localStorage.getItem("HerbertData");
  const data = JSON.parse(objetoSerializado)[0];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState(null);
  const [correct, setCorrect] = useState(0)
  const handleAnswerSelected = (answer) => {
    setUserAnswer(answer);
  };

  const handleNextQuestion = () => {
    const isCorrect = userAnswer === questions[currentQuestion].answer;
    setCurrentQuestion(currentQuestion + 1);
    setUserAnswer(null);
    if (isCorrect) {
      let value = correct + 1
      setCorrect(value)
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

      <span className='quiz-aviso'>Esse quiz ainda está em fase de testes.</span>
      <span className='quiz-aviso'>As respostas e pontuações ainda não estão contando.</span>

      <div className='form-group' id='form'>

        <div className='input-group'>
          <select className='input-select'>
            <option value="">Selecione a Disciplina</option>
            <option value="">Geral</option>
            <option value="">Matemática</option>
            <option value="">Física</option>
            <option value="">Química</option>
            <option value="">Biologia</option>
          </select>
        </div>

        <div className='input-group'>
          <select className='input-select'>
            <option value="">Selecione o Nível</option>
            <option value="">Iniciante</option>
            <option value="">Intermediário</option>
            <option value="">Difícil</option>
            <option value="">Avançado</option>
          </select>
        </div>

        <div className='input-group'>
          <select className='input-select'>
            <option value="">Selecione o Estilo</option>
            <option value="">Unicamp</option>
            <option value="">USP</option>
            <option value="">Enem</option>
            <option value="">Geral</option>
          </select>
        </div>

        <button className='btn-form' onClick={openQuiz}>Gerar Quiz</button>

      </div>


      <div className="quiz" id="quiz">
        <div className="quiz-header">
          <span className="quiz-label">Acertos</span>
          <div className='acertos'>{correct}</div>
        </div>

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

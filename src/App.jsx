// App.js
import React, { useState } from 'react';
import Question from './Question';
import Result from './Result';
import './App.css';

const App = () => {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      questionText: 'What is the capital of France?',
      options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
      correctOption: 'Paris',
    },
    {
      id: 2,
      questionText: 'Which programming language is React built with?',
      options: ['Java', 'JavaScript', 'C#', 'Python'],
      correctOption: 'JavaScript',
    },
    {
      id: 3,
      questionText: 'what colour is apple',
      options: ['red', 'blue', 'black', 'violet'],
      correctOption: 'red',
    },
    {
      id: 4,
      questionText: 'how are you?',
      options: ['fine', 'not fine'],
      correctOption: 'fine',
    },
    // Add more questions as needed
  ]);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].correctOption) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
  };

  return (
    <div className="app">
      <div className="nav-bar">
        <span>Question {currentQuestion + 1} of {questions.length}</span>
        <span>Score: {score}</span>
      </div>
      {currentQuestion < questions.length ? (
        <Question
          question={questions[currentQuestion]}
          onAnswer={handleAnswer}
        />
      ) : (
        <Result score={score} totalQuestions={questions.length} onRestart={handleRestart} />
      )}
    </div>
  );
};

export default App;

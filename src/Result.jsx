// Result.js
import React from 'react';

const Result = ({ score, totalQuestions, onRestart }) => {
  return (
    <div className="result-container">
      <h2>Quiz Completed!</h2>
      <p>Your Score: {score}/{totalQuestions}</p>
      <button onClick={onRestart}>Restart Quiz</button>
    </div>
  );
};

export default Result;

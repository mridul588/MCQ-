// Question.js
import React, { useState } from 'react';

const Question = ({ question, onAnswer }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    onAnswer(selectedOption);
    setSelectedOption('');
  };

  return (
    <div className="question-container">
      <h2>{question.questionText}</h2>
      <div className="options-container">
        {question.options.map((option, index) => (
          <div
            key={index}
            className={`option ${selectedOption === option ? 'selected' : ''}`}
            onClick={() => handleOptionChange(option)}
          >
            {option}
          </div>
        ))}
      </div>
      <button onClick={handleNextQuestion} disabled={!selectedOption}>
        Next
      </button>
    </div>
  );
};

export default Question;

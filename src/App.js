import React, { useState } from 'react';
import './App.css';

function App() {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showSolution, setShowSolution] = useState(false);

  const question = {
    image: '/ekg1.png',
    choices: [
      'Vorhofflimmern',
      'AV-Block 2. Grades',
      'ST-Streckenhebung',
      'Ventrikuläre Tachykardie',
      'Sinusrhythmus'
    ],
    correct: 2,
    explanation: 'Es handelt sich um eine ST-Streckenhebung – typisch bei Myokardinfarkt.'
  };

  const handleSelect = (index) => {
    setSelectedAnswer(index);
    setShowSolution(true);
  };

  return (
    <div className="quiz-container">
      <h1>EKG Quiz</h1>
      <img src={question.image} alt="EKG" className="ekg-image" />

      {!showSolution && (
        <div className="choices">
          {question.choices.map((choice, index) => (
            <button
              key={index}
              onClick={() => handleSelect(index)}
              className="choice-button"
            >
              {choice}
            </button>
          ))}
        </div>
      )}

      {showSolution && (
        <div className="solution">
          <p>
            {selectedAnswer === question.correct
              ? '✅ Richtig!'
              : '❌ Falsch.'}
          </p>
          <p><strong>Erklärung:</strong> {question.explanation}</p>
        </div>
      )}
    </div>
  );
}

export default App;

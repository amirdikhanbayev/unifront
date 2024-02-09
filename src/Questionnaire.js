import React, { useState } from 'react';
import './Questionnaire.css';

const Questionnaire = ({ question, onAnswer, totalSteps }) => {
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleOptionClick = (option) => {
        // Если чекбокс уже был выбран, убираем его из выбранных
        if (selectedOptions.includes(option)) {
            setSelectedOptions(selectedOptions.filter((selectedOption) => selectedOption !== option));
        } else {
            // Иначе добавляем его в выбранные и убираем все остальные
            setSelectedOptions([option]);
        }
    };

    const handleAnswerClick = () => {
        onAnswer({ questionId: question.id, answer: selectedOptions });
        setSelectedOptions([]);
    };

    return (
        <div className="Questionnaire">
            <h2>{question.text}</h2>
            <div>
                {question.options.map((option, index) => (
                    <div key={index} className="QuestionOption">
                        <input
                            type="checkbox"
                            id={`option${index}`}
                            checked={selectedOptions.includes(option)}
                            onChange={() => handleOptionClick(option)}
                        />
                        <label htmlFor={`option${index}`}>{option}</label>
                    </div>
                ))}
            </div>
            <button onClick={handleAnswerClick}>Ответить</button>
        </div>
    );
};

export default Questionnaire;
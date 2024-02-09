import React, { useState } from 'react';
import Questionnaire from './Questionnaire';
import ProgressBar from './ProgressBar';
import './App.css';

function App() {
  const [answers, setAnswers] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    { id: 1, text: 'Какую книгу вы читаете в последнее время?', options: ['Роман', 'Фантастика', 'Детектив', 'Научпоп'] },
    { id: 2, text: 'Как часто вы занимаетесь спортом?', options: ['Ежедневно', '2-3 раза в неделю', 'Редко', 'Никогда'] },
    { id: 3, text: 'Какое ваше любимое время года?', options: ['Весна', 'Лето', 'Осень', 'Зима'] },
    { id: 4, text: 'Как вы предпочитаете проводить выходные?', options: ['На природе', 'В городе', 'С друзьями', 'Дома'] },
    { id: 5, text: 'Какое ваше любимое блюдо?', options: ['Пицца', 'Суши', 'Стейк', 'Салат'] },
    { id: 6, text: 'Какой вид искусства вам ближе всего?', options: ['Живопись', 'Музыка', 'Театр', 'Литература'] },
    { id: 7, text: 'Как вы относитесь к путешествиям?', options: ['Обожаю', 'Не люблю', 'Иногда', 'Постоянно в пути'] },
    { id: 8, text: 'Какой ваш любимый цвет?', options: ['Красный', 'Синий', 'Зеленый', 'Желтый'] },
    { id: 9, text: 'Что для вас важнее всего в работе?', options: ['Заработок', 'Интересные задачи', 'Коллектив', 'Карьерный рост'] },
    { id: 10, text: 'Какие виды отдыха вам ближе всего?', options: ['Пляжный отдых', 'Горные походы', 'Экскурсии', 'Шопинг'] },
  ];

  const handleAnswer = (answer) => {
    setAnswers([...answers, answer]);
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
      <div className="App">
        {currentQuestion < questions.length ? (
            <Questionnaire
                question={questions[currentQuestion]}
                onAnswer={handleAnswer}
                totalSteps={questions.length}
            />
        ) : (
            <div>
              <h2>Спасибо за участие в опросе!</h2>
              {/* Отображение результатов или другие действия после завершения опроса */}
            </div>
        )}
        <ProgressBar currentStep={currentQuestion + 1} totalSteps={questions.length} />
      </div>
  );
}

export default App;
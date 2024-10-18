// Calculator.js
import React, { useState } from 'react';
import { Button } from '@react95/core';

const Calculator = () => {
  const [weight, setWeight] = useState('');
  const [reps, setReps] = useState('');
  const [result, setResult] = useState(null);

  const calculate1RM = () => {
    const weightNum = parseFloat(weight);
    const repsNum = parseInt(reps, 10);

    // Проверка на валидные входные данные
    if (!isNaN(weightNum) && !isNaN(repsNum) && repsNum > 0) {
      const oneRM = (weightNum * repsNum * 0.0333) + weightNum;
      setResult(oneRM.toFixed(2)); // Сохраняем результат с двумя знаками после запятой
    } else {
      alert('Пожалуйста, введите действительные значения для веса и повторений.');
    }
  };

  return (
    <div style={{ padding: '10px' }}>
      <h3>Калькулятор жима на раз</h3>
      <div style={{ marginBottom: '10px' }}>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Вес (кг)"
          style={{ marginRight: '10px' }}
        />
        <input
          type="number"
          value={reps}
          onChange={(e) => setReps(e.target.value)}
          placeholder="Повторения"
          style={{ marginRight: '10px' }}
        />
        <Button onClick={calculate1RM}>Рассчитать</Button>
      </div>
      {result !== null && (
        <div>
          <h4>Ваш жим на одно повторение: {result} кг</h4>
        </div>
      )}
    </div>
  );
};

export default Calculator;


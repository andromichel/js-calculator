// src/Calculator.js
import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [prevValue, setPrevValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [resetDisplay, setResetDisplay] = useState(false);

  const handleClick = (value) => {
    if (resetDisplay) {
      setDisplay(value);
      setResetDisplay(false);
    } else {
      setDisplay((prevDisplay) =>
        prevDisplay === '0' || prevDisplay === 'Error' ? value : prevDisplay + value
      );
    }
  };

  const handleOperator = (op) => {
    if (prevValue === null) {
      setPrevValue(parseFloat(display));
    } else if (operator) {
      setPrevValue(calculate(prevValue, parseFloat(display), operator));
    }
    setOperator(op);
    setResetDisplay(true);
  };

  const handleClear = () => {
    setDisplay('0');
    setPrevValue(null);
    setOperator(null);
  };

  const handleDecimal = () => {
    if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  const handleEquals = () => {
    if (operator && prevValue !== null) {
      setDisplay(calculate(prevValue, parseFloat(display), operator).toString());
      setPrevValue(null);
      setOperator(null);
    }
  };

  const calculate = (x, y, op) => {
    switch (op) {
      case '+':
        return x + y;
      case '-':
        return x - y;
      case '*':
        return x * y;
      case '/':
        return y !== 0 ? x / y : 'Error';
      default:
        return y;
    }
  };

  return (
    <div id="calculator">
      <div id="display">{display}</div>
      <div id="buttons">
        <button id="clear" className="double-width" onClick={handleClear}>AC</button>
        <button id="divide" className="operator" onClick={() => handleOperator('/')}>/</button>
        <button id="multiply" className="operator" onClick={() => handleOperator('*')}>x</button>
        <button id="seven" onClick={() => handleClick('7')}>7</button>
        <button id="eight" onClick={() => handleClick('8')}>8</button>
        <button id="nine" onClick={() => handleClick('9')}>9</button>
        <button id="subtract" className="operator" onClick={() => handleOperator('-')}>-</button>
        <button id="four" onClick={() => handleClick('4')}>4</button>
        <button id="five" onClick={() => handleClick('5')}>5</button>
        <button id="six" onClick={() => handleClick('6')}>6</button>
        <button id="add" className="operator" onClick={() => handleOperator('+')}>+</button>
        <button id="one" onClick={() => handleClick('1')}>1</button>
        <button id="two" onClick={() => handleClick('2')}>2</button>
        <button id="three" onClick={() => handleClick('3')}>3</button>
        <button id="equals" className="double-height" onClick={handleEquals}>=</button>
        <button id="zero" className="double-width" onClick={() => handleClick('0')}>0</button>
        <button id="decimal" onClick={handleDecimal}>.</button>
        
      </div>
      <footer>
        <p>Designed and Coded by <a href="https://www.linkedin.com/in/andro-michel-9397ab236/" target="_blank" rel="noopener noreferrer">Andro Michel</a></p>
      </footer>
    </div>
  );
};

export default Calculator;

import React, { useState } from 'react';
//import './Calculator.css'; // You can define your own styles in a CSS file

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');
  const [error, setError]=useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const validateInput = () => {
    if (num1 === '' && num2 === '') {
        setError("Error");
      setErrorMessage('Both numbers are empty.');
      return false;
    }

    if (num1 === '') {
        setError("Error");
      setErrorMessage('Number 1 cannot be empty.');
      return false;
    }

    if (num2 === '') {
        setError("Error");
      setErrorMessage('Number 2 cannot be empty.');
      return false;
    }

    if (!/^-?\d*\.?\d+$/.test(num1) || !/^-?\d*\.?\d+$/.test(num2)) {
        setError("Error");
      setErrorMessage('Please enter valid numbers.');
      return false;
    }
    setError("");
    setErrorMessage('');
    return true;
  };


  const handleAddition = () => {
    if (validateInput()) {
      const resultValue = parseFloat(num1) + parseFloat(num2);
      setResult(`Result: ${resultValue}`);
      setSuccessMessage('Success');
      
    }
  };

  const handleSubtraction = () => {
    if (validateInput()) {
      const resultValue = parseFloat(num1) - parseFloat(num2);
      setResult(`Result: ${resultValue}`);
      setSuccessMessage('Success');
    
    }
  };

  const handleMultiplication = () => {
    if (validateInput()) {
      const resultValue = parseFloat(num1) * parseFloat(num2);
      setResult(`Result: ${resultValue}`);
      setSuccessMessage('Success');
     
    }
  };

  const handleDivision = () => {
    if (validateInput()) {
      if (parseFloat(num2) === 0) {
        setErrorMessage('Cannot divide by zero.');
        return;
      }

      const resultValue = parseFloat(num1) / parseFloat(num2);
      setResult(`Result: ${resultValue}`);
      setSuccessMessage('Success');
    
    }
  };

  return (
    <div className="calculator">

        <p>REACT CALCULATOR</p>
      <input
        type="text"
        placeholder="Num 1"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <br></br>
      <input
        type="text"
        placeholder="Num 2"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <div className="calculator-buttons">
        <button  onClick={handleAddition}>+</button>
        <button onClick={handleSubtraction}>-</button>
        <button onClick={handleMultiplication}>*</button>
        <button onClick={handleDivision}>/</button>
      </div>
      <div className="error">{error}</div>
      <div className="error">{errorMessage}</div>
      <div className="success">{successMessage}</div>
      <div className="result">{result}</div>
      
    </div>
  );
};

export default Calculator;

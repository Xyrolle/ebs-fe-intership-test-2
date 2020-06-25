import React, { useState } from 'react';

import Button from './Button.js';

import '../styles/Calculator.css';

const Calculator = () => {
	const [ inputString, setInputString ] = useState('');

	const handleChange = (evt) => {
		setInputString(evt.target.value);
	};

	const clearInputField = () => {
		setInputString('');
	};

	const addSymbol = (symbol) => {
		setInputString(inputString + ' ' + symbol);
	};

	const evaluateExpression = () => {
		// eslint-disable-next-line no-eval
		setInputString(eval(inputString));
	};

	const symbols = [ 'C', '/', '7', '8', '9', '-', '4', '5', '6', '+', '1', '2', '3', '=' ];
	const specialOperations = { C: clearInputField, '=': evaluateExpression };

	return (
		<div className='calculator'>
			<input id='input-field' disabled type='text' onChange={handleChange} value={inputString} />
			<div className='buttons'>
				{symbols.map((symbol) => {
					let action, optionalStyle;

					if (symbol in specialOperations) {
						action = specialOperations[symbol];
						if (symbol === 'C') optionalStyle = 'span-two-col';
					} else action = addSymbol;

					return <Button symbol={symbol} action={action} optionalStyle={optionalStyle} />;
				})}
			</div>
		</div>
	);
};

export default Calculator;

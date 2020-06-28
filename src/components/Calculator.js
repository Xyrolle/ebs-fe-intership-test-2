/* eslint-disable no-eval */
import React, { useState } from 'react';
import { v4 as uuid_v4 } from 'uuid';

import Button from './Button.js';

import '../styles/Calculator.css';

const Calculator = () => {
	const [ inputString, setInputString ] = useState('');

	const clearInputField = () => {
		setInputString('');
	};

	const addSymbol = (symbol) => {
		if (inputString === 'Error') setInputString(symbol);
		else setInputString(inputString + symbol);
	};

	const evaluateExpression = () => {
		try {
			setInputString(eval(inputString));
		} catch (err) {
			setInputString('Error');
			console.error('error occured while using eval()');
		}
	};

	const symbols = [ 'C', '/', '*', '9', '8', '+', '-', '7', '6', '5', '4', '3', '2', '1', '0', '.', '=' ];
	const specialOperations = { C: clearInputField, '=': evaluateExpression };

	return (
		<div className='calculator'>
			<input id='input-field' disabled type='text' value={inputString.toString()} />
			<div className='buttons'>
				{symbols.map((symbol) => {
					let action, optionalStyle;

					if (symbol in specialOperations) {
						action = specialOperations[symbol];
						if (symbol === 'C') optionalStyle = 'span-two-col';
						else if (symbol === '=') optionalStyle = 'span-three-col';
					} else action = addSymbol;

					return <Button symbol={symbol} action={action} optionalStyle={optionalStyle} key={uuid_v4()} />;
				})}
			</div>
		</div>
	);
};

export default Calculator;

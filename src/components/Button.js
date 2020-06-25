import React from 'react';

const Button = ({ symbol, action, optionalStyle }) => {
	return (
		<span
			className={
				'button ' +
				(
					optionalStyle ? optionalStyle :
					'')
			}
			onClick={() => {
				action(symbol);
			}}
		>
			{symbol}
		</span>
	);
};

export default Button;

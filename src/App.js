import { useState } from 'react';
import styles from './App.module.css';

export const App = () => {
	const [operand1, setOperand1] = useState('0');
	const [operand2, setOperand2] = useState('');
	const [operator, setOperator] = useState('');
	const [isResult, setIsResult] = useState(false);

	const nums = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0'];

	const numberClick = (digit) => {
		setIsResult(false);
		if (!operator) {
			if (operand1 === '0') {
				setOperand1(digit);
			} else {
				setOperand1(operand1 + digit);
			}
		} else {
			setOperand2(operand2 + digit);
		}
	};

	const operatorClick = (operator) => {
		setIsResult(false);
		if (operator === 'C') {
			setOperand1('0');
			setOperand2('');
			setOperator('');
		} else if (operator === '+' || operator === '-') {
			setOperator(operator);
		}
	};

	const operatorResult = () => {
		switch (operator) {
			case '+': {
				setOperand1(Number(operand1) + Number(operand2));
				setOperand2('');
				setOperator('');
				setIsResult(true);
				break;
			}
			case '-': {
				setOperand1(Number(operand1) - Number(operand2));
				setOperand2('');
				setOperator('');
				setIsResult(true);
				break;
			}
			default:
				break;
		}
	};

	const displayValue = operand1 + operator + operand2;

	return (
		<div className={styles.calc}>
			<input
				className={isResult ? `${styles.input} ${styles.result}` : styles.input}
				value={displayValue}
				readOnly
			/>
			<button onClick={() => operatorClick('C')} className={styles.button}>
				C
			</button>
			<div className={styles.buttonContainer}>
				<button onClick={() => operatorResult('=')} className={styles.button}>
					=
				</button>
				<button onClick={() => operatorClick('+')} className={styles.button}>
					+
				</button>
				<button onClick={() => operatorClick('-')} className={styles.button}>
					-
				</button>
				{nums.map((num) => (
					<button
						key={num}
						onClick={() => numberClick(num)}
						className={styles.button}
					>
						{num}
					</button>
				))}
			</div>
		</div>
	);
};

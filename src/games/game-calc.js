import { cons } from 'hexlet-pairs';
import { letsPlay, getNumRandom } from '..';

const gameRules = 'What is the result of the expression?';

const calcGame = () => {
  const firstNumber = getNumRandom(1, 15);
  const secondNumber = getNumRandom(1, 15);
  const mathSymbols = '+-*';
  const randomSymbol = mathSymbols.charAt(Math.floor(Math.random() * mathSymbols.length));
  const question = `${firstNumber} ${randomSymbol} ${secondNumber}`;
  let answer = 0;

  switch (randomSymbol) {
    case '+':
      answer = firstNumber + secondNumber;
      break;
    case '-':
      answer = firstNumber - secondNumber;
      break;
    case '*':
      answer = firstNumber * secondNumber;
      break;
    default:
      break;
  }
  const res = cons(question, answer.toString());
  return res;
};

const playCalc = () => letsPlay(calcGame, gameRules);

export default playCalc;

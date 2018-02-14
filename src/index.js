import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

export const questionFirstName = () => readlineSync.question('May I have your name?');

export const answer = () => readlineSync.question('Your answer: ');

export const getNumRandom = (min, max) => Math.floor((Math.random() * (max - min)) + min);

export const isNumEven = num => (num % 2 === 0 ? 'yes' : 'no');

export const letsPlay = (questionAndAnswer, game, quantityQuestions) => {
  console.log(`Welcome to the Brain Games!\n${game}\n`);
  const gamerName = questionFirstName();
  console.log(`Hello, ${gamerName}!\n`);
  const iterator = (counter) => {
    if (counter === 0) {
      return console.log(`Congratulations, ${gamerName}!`);
    }
    const dataResults = questionAndAnswer();

    const gameQuestion = car(dataResults);
    console.log(`Question: ${gameQuestion}`);

    const gamerAnswer = answer();
    const correctAnswer = cdr(dataResults);
    if (gamerAnswer !== correctAnswer) {
      return console.log(`'${gamerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'\nLet's try again, ${gamerName}!`);
    }
    console.log('Correct');
    return iterator(counter - 1);
  };
  return iterator(quantityQuestions);
};

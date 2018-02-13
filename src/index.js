import readlineSync from 'readline-sync';

export const questionFirstName = () => readlineSync.question('May I have your name?');

export const answer = () => readlineSync.question('Your answer: ');

const getNumRandom = (min, max) => Math.floor((Math.random() * (max - min)) + min);

const isNumEven = num => (num % 2 === 0 ? 'yes' : 'no');

export const evenGame = () => {
  console.log('Welcome to the Brain Games!\nAnswer "yes" if number even otherwise answer "no".\n');
  const gamerName = questionFirstName();
  console.log(`Hello, ${gamerName}!\n`);

  const questionsNum = 3;

  const iterator = (counter) => {
    if (counter === 0) {
      return console.log(`Congratulations, ${gamerName}!`);
    }
    const randomNum = getNumRandom(1, 15);
    console.log(`Question: ${randomNum}`);
    const gamerAnswer = answer();
    const correctAnswer = isNumEven(randomNum);
    if (gamerAnswer !== correctAnswer) {
      return console.log(`'${gamerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'\nLet's try again, ${gamerName}!`);
    }
    console.log('Correct');
    return iterator(counter - 1);
  };

  return iterator(questionsNum);
};

// export default questionFirstName;

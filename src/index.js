import readlineSync from 'readline-sync';

export const questionFirstName = () => {
  return readlineSync.question('May I have your name?');
};



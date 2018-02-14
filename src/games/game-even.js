import { cons } from 'hexlet-pairs';
import { getNumRandom } from '..';

const isNumEven = num => (num % 2 === 0 ? 'yes' : 'no');

const evenGame = () => {
  const question = getNumRandom(1, 15);
  // let answer = 'yes';
  const answer = isNumEven(question);
  const res = cons(question, answer);
  return res;
};

export default evenGame;

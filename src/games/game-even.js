import { cons } from 'hexlet-pairs';
import { letsPlay, getNumRandom } from '..';

const isNumEven = num => (num % 2 === 0 ? 'yes' : 'no');

const gameRules = 'Answer "yes" if number even otherwise answer "no".';

const evenGame = () => {
  const question = getNumRandom(1, 15);
  const answer = isNumEven(question);
  const res = cons(question, answer);
  return res;
};

const playEven = () => letsPlay(evenGame, gameRules);

export default playEven;

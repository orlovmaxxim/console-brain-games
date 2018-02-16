import { cons } from 'hexlet-pairs';
import { letsPlay, getNumRandom } from '..';

const gameRules = 'Is this number prime?';

const isNumPrime = (questionNum) => {
  const iterator = (counter, acc) => {
    if (counter === acc) {
      return 1;
    }
    if (counter % acc === 0) {
      return 0;
    }
    return iterator(counter, acc + 1);
  };
  return iterator(questionNum, 2);
};

const primeGame = () => {
  const question = getNumRandom(1, 100);
  const answer = isNumPrime(question) ? 'yes' : 'no';
  const res = cons(question, answer);
  return res;
};

const playPrime = () => letsPlay(primeGame, gameRules);

export default playPrime;

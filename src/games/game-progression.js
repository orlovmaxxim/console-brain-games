import { cons } from 'hexlet-pairs';
import { letsPlay, getNumRandom } from '..';

const gameRules = 'What number is missing in this progression?';

const makeProgression = (start, step, lengthProgression = 10) => {
  const iterator = (counter, acc) => {
    if (counter === 0) {
      return acc;
    }
    const nextValue = acc[acc.length - 1] + step;
    const newAcc = acc.concat(nextValue);
    return iterator(counter - 1, newAcc);
  };
  const arrProgres = [];
  arrProgres.push(start);
  return iterator(lengthProgression, arrProgres);
};

const progressionGame = () => {
  const startDigitProgression = getNumRandom(1, 50);
  const progressionStep = getNumRandom(1, 5);
  const progression = makeProgression(startDigitProgression, progressionStep);
  const indexAnswer = getNumRandom(0, progression.length - 1);
  const answer = progression[indexAnswer];

  progression.splice(indexAnswer, 1, '..');

  const res = cons(progression.join(' '), answer.toString());
  return res;
};

const playProgression = () => letsPlay(progressionGame, gameRules);

export default playProgression;

import { cons } from 'hexlet-pairs';
import { letsPlay, getNumRandom } from '..';

const gcd = (n, m) => {
  let a = n;
  let b = m;
  if (a < b) {
    [a, b] = [b, a];
  }
  if (b > 0) {
    return gcd(b, a % b);
  }
  return Math.abs(a);
};

const gameRules = 'Find the greatest common divisor of given numbers.';

const gcdGame = () => {
  const firstNum = getNumRandom(1, 100);
  const secondNum = getNumRandom(1, 100);
  const question = `${firstNum} ${secondNum}`;

  const answer = gcd(firstNum, secondNum);

  const res = cons(question, answer.toString());
  return res;
};

const playGcd = () => letsPlay(gcdGame, gameRules);

export default playGcd;

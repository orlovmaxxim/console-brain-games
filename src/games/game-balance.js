import { cons } from 'hexlet-pairs';
import { letsPlay, getNumRandom } from '..';

const gameRules = 'Balance the given number.';
const quantity = 3;

const sum = (nums) => {
  let res = 0;
  for (let i = 0; i < nums.length; i += 1) {
    res += parseInt(nums[i], 10);
  }
  return res;
};

const minBalance = (leng, minNum) => {
  const arrRes = [];
  for (let i = 0; i < leng; i += 1) {
    arrRes.push(minNum);
  }
  return arrRes;
};

const balanceGame = () => {
  const randomNum = getNumRandom(1, 1000).toString();
  const sortNum = randomNum.split('').sort().join('');
  const sumOfSortNums = sum(sortNum);
  const lengthOfSortNums = parseInt(sortNum.length, 10);
  const minNumInBalance = Math.floor(sumOfSortNums / lengthOfSortNums);
  const minBalanceArr = minBalance(lengthOfSortNums, minNumInBalance);
  const remaningNum = sumOfSortNums - sum(minBalanceArr);

  const iterator = (counter, acc) => {
    let amount = counter;
    const numbers = acc;
    for (let i = lengthOfSortNums - 1; i > 0; i -= 1) {
      if (amount <= 0) {
        return acc;
      }
      numbers[i] += 1;
      amount -= 1;
    }
    return iterator(amount, numbers);
  };

  const question = `${randomNum}`;

  const answer = iterator(remaningNum, minBalanceArr);
  const res = cons(question, answer.join(''));
  return res;
};

const playBalance = () => letsPlay(balanceGame, gameRules, quantity);

export default playBalance;

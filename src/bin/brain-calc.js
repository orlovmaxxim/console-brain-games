#!/usr/bin/env node
import calcGame from '../games/game-calc';
import { letsPlay } from '..';

const gameRules = 'What is the result of the expression?';
const quantity = 3;
letsPlay(calcGame, gameRules, quantity);

#!/usr/bin/env node
import evenGame from '../games/game-even';
import { letsPlay } from '..';

const gameRules = 'Answer "yes" if number even otherwise answer "no".';
const quantity = 3;
letsPlay(evenGame, gameRules, quantity);

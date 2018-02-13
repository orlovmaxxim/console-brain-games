#!/usr/bin/env node
import questionFirstName from '..';

console.log('Welcome to the brain games');
const firstName = questionFirstName();

console.log(`Hello, ${firstName}!`);

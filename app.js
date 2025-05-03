 import readline from "readline";
 import {stdin} from 'process';
 import path from 'path';
 import colors from 'colors';
 import{addNum, subtractNum, multiplyNum, divideNum} from './my_module/calculator.js';


const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Welcome please, press enter on your keyboard after each question, thanks');
read.question('Please enter your name: ', (name) => {
    read.question('Please enter First Number: ', (num1) => {
      read.question('Please enter Second Number number: ', (num2) => {
        console.log(`Hello ${name} Your entered Number ${num1} and ${num2}, see your result below`);
        console.log(colors.green(`Your summation result is: ${addNum(parseFloat(num1), parseFloat(num2))}`));
        console.log(colors.blue(`Your subtraction result is: ${subtractNum(parseFloat(num1), parseFloat(num2))}`));
        console.log(colors.white(`Your Multiplication result is: ${multiplyNum(parseFloat(num1), parseFloat(num2))}`));
        console.log(colors.red(`Your Division result is: ${divideNum(parseFloat(num1), parseFloat(num2))}`));
        console.log('Thank You');
        read.close();
      });
    });
  });
  
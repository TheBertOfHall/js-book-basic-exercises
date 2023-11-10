function multipy() {
  let rlSync = require('readline-sync');
  let firstNumber = Number(rlSync.question('Enter the first number? \n'));
  let secondNumber = Number(rlSync.question('Enter the second number? \n'));
  return firstNumber * secondNumber;
}

console.log(multipy());
let fib = [0, 1];
let tableFibonacci = [];
for (i = 2; i <= 20; i++) {
  fib[i] = fib[i - 2] + fib[i - 1];
  tableFibonacci.push(fib[i]);
}

function getNearFibonacci(input) {
  let result;
  let data = 0;
  for (let i = 0; i < input.length; i++) {
    data += input[i];
  }
  let tempData;
  for (let j = tableFibonacci.length; j >= 0; j--) {
    tempData = tableFibonacci[tableFibonacci.length - 1];
    if (tableFibonacci[j] - data < tempData) {
      if (tableFibonacci[j] - data > 0) {
        tempData = tableFibonacci[j] - data;
        result = tableFibonacci[j];
      }
    }
  }
  return result;
}

console.log(getNearFibonacci([3, 3]));

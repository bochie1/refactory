function fizzbuzz(input) {
  let result = [];
  const fizzbuzz = "FizzBuzz";
  const fizz = "Fizz";
  const buzz = "Buzz";
  for (let i = 1; i <= input; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push(fizzbuzz);
    } else if (i % 3 === 0) {
      result.push(fizz);
    } else if (i % 5 === 0) {
      result.push(buzz);
    } else {
      result.push(i);
    }
  }

  return result;
}

console.log(fizzbuzz(15));

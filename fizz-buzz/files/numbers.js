const expected = []

for (let i = 1 ; i <= 100 ; i++){
 if((number % 3) == 0 && (number % 5) != 0 ){
    expected.push("Fizz");
  }
  else if((number % 5) == 0  && (number % 3) != 0 ){
    expected.push("Buzz");
  }
  else if((number % 5) == 0 && (number % 3) == 0){
    expected.push("FizzBuzz");
  }
  else{
    expected.push(i);
  }
}

module.exports = expected
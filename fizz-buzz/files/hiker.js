'use strict';


let temp;
function answer(number) {
  temp = number;
  if((number % 3) == 0 && (number % 5) != 0 ){
    temp = "Fizz";
  }
  else if((number % 5) == 0  && (number % 3) != 0 ){
    temp = "Buzz";
  }
  else if((number % 5) == 0 && (number % 3) == 0){
    temp = "FizzBuzz";
  }
  return temp;
}


function actual(number){
  let array = [];
  for (let i = 1 ; i <= 100 ; i++){
    if((number % 3) == 0 && (number % 5) != 0 ){
    array.push("Fizz");
  }
  else if((number % 5) == 0  && (number % 3) != 0 ){
    array.push("Buzz");
  }
  else if((number % 5) == 0 && (number % 3) == 0){
    array.push("FizzBuzz");
  }
    else{
      array.push(i);
    }
  }
  return array;
}

module.exports = answer , actual;

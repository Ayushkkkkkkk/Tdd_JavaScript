'use strict';

const answer = require('./hiker');
const exp = require('./numbers');





describe('answer', () => {
  it('should return Fizz on every mulitple of 3', () => {
    expect(answer(3)).toEqual("Fizz");
  });
});

describe('answer', () => {
  it('should return Buzz on every mulitple of 5', () => {
    expect(answer(10)).toEqual("Buzz");
  });
});


describe('answer', () => {
  it('should return FizzBuzz on every mulitple of 5 and 3', () => {
    expect(answer(15)).toEqual("FizzBuzz");
  });
});

describe('answer', () => {
  it('should return integer otherwise', () => {
    expect(answer(7)).toEqual(7);
  });
});


describe('answer', () => {
  it('should return integer otherwise', () => {
    expect(actual(100)).toEqual(expected);
  });
});











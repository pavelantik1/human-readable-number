module.exports = function toReadable (number) {
  const numberTextAlphabet = {
    1: "one",
    2: "two",
    3: "three",
    4:"four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten", 
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety"
,  }
let extendNumberAlphabet = {
  0: '',
  1: "thousand",
  2: "million",
  3:'billion'
}

function hundredsToText (subNum = 0) {
  if(subNum === 0) return '';
  if(numberTextAlphabet[subNum] !== undefined) return numberTextAlphabet[subNum];
  let res = '';

  let hundredDigit = Math.trunc(subNum/100);
  let tens = subNum % 100;
  let tenDigit =  Math.trunc(tens/10);
  let digit = tens % 10;

  if(hundredDigit !==0) res = numberTextAlphabet[hundredDigit] +' ' + 'hundred';
  if(numberTextAlphabet[tens] !== undefined) return res + ' ' + numberTextAlphabet[tens];
  if(tenDigit !== 0) res = res + ' ' + numberTextAlphabet[tenDigit*10];
  if(digit === 0) return res;
  res = res + ' ' + numberTextAlphabet[digit];
  return res.trim();
}

if(number === 0 ) return "zero";
if(numberTextAlphabet[number] !== undefined) {
  return (numberTextAlphabet[number]);
}

const numberGrade = Math.trunc(Math.trunc(Math.log10(number) / 3));
let numberString = String(number);
let result = '';

for(let i = 0; i <= numberGrade; i++) {
  const startPositionHundred = numberString.length - (i+1)*3;
  const endPositionHundred = numberString.length - ((i+1)*3)+3;
  const hundred = numberString.substring(startPositionHundred, endPositionHundred)
  let hundredsPart = hundredsToText(parseFloat(hundred));
  if(hundredsPart !== '' ) {
    result = hundredsPart + ' ' + extendNumberAlphabet[i] + ' ' + result;
  }  
}
return result.trim();
}

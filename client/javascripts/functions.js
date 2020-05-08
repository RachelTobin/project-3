// jshint esversion: 6

//fill an array with the numbers from start to stop, in steps of step

let fillArray = (start, stop, step) => Array.from({
  length: (stop - start) / step + 1
}, (_, i) => start + (i * step));

//create an array of the numbers 1 - 100
let arrOf1To100 = fillArray(1, 100, 1);

//log the array for inspection
console.log(arrOf1To100);



//Req. 4b
let bitBatBotOrNot = (n) => {
  let result = "";
  // is n divisible by 3?
  if (n % 3 == 0) {
    result = `${result}Bit`;
  }
  // is n divisible by 5?
  if (n % 5 == 0) {
    result = `${result}Bat`;
  }
  //is n divisible by 7?
  if (n % 7 == 0) {
    result = `${result}Bot`;
  }
  //if n is not divisible by 3, 5 or 7
  if (n % 3 != 0 && n % 5 != 0 && n % 7 != 0) {
    result = "Not";
  }
  return result;
};



//Req. 4c
let findAllbitBatBotOrNots1 = (arr) => {
  let numArray = "";
  let resultArray = arr.map(function(num) {
    //let returnVal = `${num}` + ": " + bitBatBotOrNot(num);
    let bitStr = bitBatBotOrNot(num);
    return `${num}: ${bitStr}`;
  });
  return resultArray;
};


//Req. 4d
let findAllbitBatBotOrNots2 = (arr) => {
  let resultArray = [];
  for (i = 0; i < arr.length; ++i) {
    let newVal = bitBatBotOrNot(arr[i]);
    resultArray.push(`${arr[i]}: ${newVal}`);
  }
  return resultArray;
};



//Req. 4e
let findAllbitBatBotOrNots3 = (arr) => {
  let resultArray = [];
  for (let num of arr) {
    let newVal = bitBatBotOrNot(num);
    resultArray.push(`${num}: ${newVal}`);
  }
  return resultArray;
};



//Req. 4f
let findAllbitBatBotOrNots4 = (arr) => {
  let arrVal = [];
  let resultArray = arr.forEach(function(num) {
    let bitStr = bitBatBotOrNot(num);
    arrVal.push(`${num}: ${bitStr}`);
  });
  return arrVal;
};


//Part 5 - Extra Credit
let findAllbitBatBotOrNotsXC = (arr) => {
  let resultArray = [];
  for (let i in arr) {
    let newVal = bitBatBotOrNot(arr[i]);
    resultArray.push(`${arr[i]}: ${newVal}`);
  }
  return resultArray;
};

//test the functions

findAllbitBatBotOrNots1(arrOf1To100);

findAllbitBatBotOrNots2(arrOf1To100);

findAllbitBatBotOrNots3(arrOf1To100);

findAllbitBatBotOrNots4(arrOf1To100);

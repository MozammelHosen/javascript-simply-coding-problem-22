const result = Math.pow(5, 7);
console.log(result);

const mark1 = 50;
const mark2 = 90;

const result1 = Math.abs(mark1 - mark2);
console.log(result1);

if (result1 < 5) {
  console.log("Let's Me Friends Now");
} else {
  console.log("Let's Me Friend Not Now");
}

//  Math
const number = -2.499;
const result3 = Math.abs(number);
console.log(result3);

const number2 = 2.499
const result4 = Math.round(number2);
console.log(result4);

const number3 = 56.38799;
const result5 = Math.ceil(number3);
console.log(result5);

const number4 = 56.99799;
const result6 = Math.floor(number4);
console.log(result6);

//  random number
const result7 = Math.round(Math.random() *1000);
console.log(result7);

for(let i =0; i< 20; i++){
    const result8 = Math.round(Math.random() *1000);
    console.log(result8);
}
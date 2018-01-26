console.log("main.js");

//Staring with a positive integer replace the number
//by the sum of the square of its digits and repeat the process until the number either equals
//1 (where it will stay), or it loops endlessly in a cycle that does not include 1. Those numbers 
//for which this procss ends in 1 are happy numbers, while those that do not end in 1 are unhappy numbers...

/* 
12+92=82

*/

let testThisNumber = "19";
let splitIntoArray = testThisNumber.split("");
console.log("splitIntoArray", splitIntoArray);

for (let i = 0; i < splitIntoArray.length; i++){
	splitIntoArray[i] = Number(splitIntoArray[i]);
}

console.log("splitIntoArray after:", splitIntoArray);

let squaredValues = [];
let i = 0;
while (i < splitIntoArray.length){
	let squared = splitIntoArray[i] * splitIntoArray[i];
	squaredValues.push(squared);
	i++;
}

console.log("squaredValues", squaredValues);

let addTogether = squaredValues[0];
i = 0;
let total;

do {
	total = addTogether + squaredValues[i];
	i++;
} while(i < squaredValues.length);

console.log("total", total);
	

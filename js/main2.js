console.log("main2.js");

let splitValues = function (value) {
	let arrayOfNumbers = value.split("");
	for (let i = 0; i < arrayOfNumbers.length; i++) {
		arrayOfNumbers[i] = Number(arrayOfNumbers[i]);
	}
	return arrayOfNumbers;
}
console.log("splitValues", splitValues("19"));

function squareAndAdd(passedValue) {
	let processedVals = [];

	let i = 0;
	while (i < passedValue.length) {
		let squared = passedValue[i] * passedValue[i];
		processedVals.push(squared);
		i++;
	}

	let allTogether = 0;
	for (let i = 0; i < processedVals.length; i++) {
		allTogether = allTogether + processedVals[i];
	}
	return allTogether;
}

function checkHappy(passedValue) {
	if (passedValue === 1 || passedValue === 7) {
		console.log(testThisNumber, " is a happy number");
		document.getElementById("output").innerHTML = `${testThisNumber} is a happy number`;

	} else {
		let checkDigits = passedValue.toString();
		if (checkDigits.length === 1) {
			console.log(testThisNumber, " is a sad number");
			document.getElementById("output").innerHTML = `${testThisNumber} is a sad number`;
		} else {
			//keep on going
			checkDigits = splitValues(checkDigits);
			let newNumber = squareAndAdd(checkDigits);
			checkHappy(newNumber)
		}
	}
}

let button = document.getElementById("btn-checkvalue");
let testThisNumber;

button.addEventListener("click", function () {
	testThisNumber = document.getElementById("numberVal").value;
	//let testThis = splitValues(testThisNumber);
	//testThis = squareAndAdd(testThisNumber);
	//testThis = checkHappy(testThisNumber);
	let testThis = checkHappy(squareAndAdd(splitValues(testThisNumber)));
});






























var stringList = ["March", "April", "May"];

var numList = [13, 78, 34];

var boolList = [false, true, false];

var monthString = "Months listed are ";

for (var i=0; i<stringList.length; i++){
  monthString += stringList[i] + ", ";
}

monthString = monthString.substring(0, monthString.length - 2);

console.log(monthString);

console.log(numList[numList.length - 1]);

var numString = "";
var numTotal = 0;

for (var j=0; j<numList.length; j++){
  numString += numList[j] + ' ';
  numTotal += numList[j];
}

console.log(numString);
console.log('numTotal', numTotal);

if (boolList[1]) {
  console.log(numList[0] + numList[2]);
} else {
  console.log(numList[1] * numList[1]);
}

for (var k=0; k<boolList.length; k++){
  if (boolList[k]) {
    console.log(numList[k]);
  }
}

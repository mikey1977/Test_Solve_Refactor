var number = 5;
var numArray = [];

function getArray() {
 for (var i = 1; i <= number; i++) {
    numArray.push([i]);
 }
 return numArray;
}
getArray();


var sumOfSqRts = numArray.map(function(current, index, array) {
  return (Math.sqrt(current));
}).reduce(function(previous, current, index, array) {
  return Math.round((previous + current)*100) / 100;
}, 0);

console.log(sumOfSqRts);

// 3 --> 4.14626
// 4 --> 6.14626
// 5 --> 8.38233

module.exports = getArray;
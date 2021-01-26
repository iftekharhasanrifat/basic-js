var friendsAge = [15, 17, 14, 16];
console.log(friendsAge);
friendsAge.push(22);
friendsAge.push(24);
var sonaliAge = friendsAge[2];
friendsAge[1] = 21;
console.log(friendsAge);
friendsAge.pop();
console.log(friendsAge);
friendsAge.unshift(6);
console.log(friendsAge);
friendsAge.shift();
console.log(friendsAge.length);

var tealine = ['kalam','salam','alam'];
tealine.unshift('Salam');
console.log(tealine);
var part = tealine.slice(1,3);
console.log(part);


var numbers = [1,2,3,4,5];

var result = numbers.slice(1,3);

console.log(result)
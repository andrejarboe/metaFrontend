try {
  throw new Error();
  console.log('Hello');
} catch (err) {
  console.log('Goodbye');
}

var str = 'Hello';
str.match('jello');

try {
  Number(5).toPrecision(300);
} catch (e) {
  console.log('There was an error');
}

var globalVar = 77;

function scopeTest() {
  var localVar = 88;
}

console.log(localVar);

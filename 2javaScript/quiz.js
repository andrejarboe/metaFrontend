var x = 20;

if (x < 5) {
	console.log('Apple');
} else if (x > 10 && x < 20) {
	console.log('Pear');
} else {
	console.log('Orange');
}

var result = 0;

var i = 0;
var limit = 3;
while (i < limit) {
	result += 2;
	i++;
}

console.log(result);

var result = 0;

var i = 0;
var limit = 3;
while(i < limit) {
    result += 2;
    i++;
}

console.log(result);

try {
	throw new Error();
	console.log('Square');
} catch (err) {
	console.log('Circle');
}

function addTwo(a, b) {
	return a;
}


console.log(addTwo(5, 10));


var cat = {};
cat.sound = 'meow';
var catSound = 'purr';
console.log(cat.sound);

var veggies = ['parsley', 'carrot'];
console.log(veggies[2]);
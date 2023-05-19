for (var i = 1; i <= 10; i++) {
	if (i == 1) {
		console.log('Gold Medal');
	} else if (i == 2) {
		console.log('Sliver Medal');
	} else if (i == 3) {
		console.log('Bronze  Medal');
	} else {
		console.log(i);
	}
}
console.log('****Switch****');
for (var i = 1; i <= 10; i++) {
	switch (i) {
		case i == 1:
			console.log('Gold Medal');
			break;
		case i == 2:
		    console.log('Sliver Medal');
            break;
        case i == 3:
		    console.log('Bronze  Medal');
		default:
		    console.log(i);
	}
}

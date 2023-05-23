// recursion
// tell the function what count is on so it knows when to stop
let counter = 3;
function example() {
    console.log(counter);
    counter -= 1;
    if (counter === 0) return;
    example();
}

example();
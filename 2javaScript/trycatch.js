
// throw new ReferenceError();

try {
    console.log(a + b);
} catch (err) {
    console.log('There was a an error');
    console.log('The error was saved in the error log');
}

console.log("My program does not stop");
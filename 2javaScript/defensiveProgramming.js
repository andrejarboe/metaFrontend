// Defensive programming is all about assuming that all the arguments a function will receive are of the wrong type,  the wrong value or both.
/*
For this exercise, let's make sure that both of the arguments that are passed in satisfy the following criteria:

The length of the word parameter cannot be less than 2.
The length of the match parameter must be 1.
The type of both the word and the match parameters must be string.
*/

function letterFinder(word, match) {
    var condition1 = typeof(word) == 'string' && word.length >= 2;
    var condition2 = typeof (match) == 'string' && match.length == 1;

    if (condition1 && condition2) {        
        for (i = 0; i < word.length; i++) {
            if (word[i] == match) {
                //if the current character at position i in the word is equal to the match
                console.log('Found the', match, 'at', i);
            } else {
                console.log('---No match found at', i);
            }
        }
    } else {
        console.log('Please pass correct arguments to the function.');
    }
}

letterFinder(1, 2)
letterFinder([], []);
letterFinder('cat', 'c');
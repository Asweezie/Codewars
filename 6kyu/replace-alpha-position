// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

// My Solution

function alphabetPosition(text) {
  let resArray = []
  text = text.toUpperCase()
  for (let i = 0; i < text.length; i++) {
    if(text.charCodeAt([i]) < 91 && text.charCodeAt([i]) > 64) {
      resArray.push(text.charCodeAt([i]) - 64)
    }
  }
  return resArray.join(' ')
}


// Best Practice

function alphabetPosition(text) {
    return text
      .toUpperCase()
      .match(/[a-z]/gi)
      .map( (c) => c.charCodeAt() - 64)
      .join(' ');
  }
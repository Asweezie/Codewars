// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 


// My solution

function duplicateEncode(word){
    let newWord = word.toLowerCase()
    let array = []
    for (let i = 0; i < word.length; i++) {
      if (newWord.indexOf(newWord[i]) != newWord.lastIndexOf(newWord[i])) {
        array.push(')')
      } else {
        array.push('(')
      }
    }
    return array.join('')
  }


  // best practice
  function duplicateEncode(word){
    return word
      .toLowerCase()
      .split('')
      .map( function (a, i, w) {
        return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
      })
      .join('');
  }

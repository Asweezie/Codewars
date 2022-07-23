// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

function duplicateCount(text){
  let stringArr = text.toLowerCase().split('')
  let objectCount = {};
  let duplicateCounter = 0;
  
  // iterate through the array, and add each element to the object as a key/value pair. If
  // element already exists, it will add a value 1, if not it will become a value of 1.
  for (element of stringArr) {
    if (objectCount[element]) objectCount[element]++
    else objectCount[element] = 1;
  }
  // iterate through the object keys, and if anything is bigger than 1 (meaning there is
  // a duplicate) then we add 1 to a "duplicate occurance counter".
  
  for (property in objectCount) {
    if (objectCount[property] > 1) duplicateCounter++
  }
  return duplicateCounter
}


// Best practice


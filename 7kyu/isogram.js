// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

// My Solution
function isIsogram(str){
  
    // go through the string and assess each letter
    // if the string has a letter that already occured, it is not an isogram
    
    // change original sring into lowercase and add each letter into an array
    let strArr = str.toLowerCase().split('')
    // create an object to count key value pairs
    let letterCount = {}
    
    // Iterate through the string array, if the letter does not exist, add value of 1, if it does, add 1
    for (const element of strArr) {
      if (letterCount[element]) letterCount[element]++
      else letterCount[element] = 1;
    }
    
    // Iterate through the object, if an object key has a higher value than 1, then it can not be an isogram due to duplicate letters
    for (const property in letterCount) {
      if (letterCount[property] > 1) return false;
      
    }
    return true;
    }

    //Best practice

    function isIsogram(str){
        return new Set(str.toUpperCase()).size == str.length;
      }

      // OR

      //use a nested for loop

      function isIsogram(str){
        var i, j;
        str = str.toLowerCase();
        for(i = 0; i < str.length; ++i)
          for(j = i + 1; j < str.length; ++j)
            if(str[i] === str[j])
              return false;
        return true;
      }


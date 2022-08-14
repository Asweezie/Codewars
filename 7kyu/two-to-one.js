// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

function longest(s1, s2) {
    let c = s1 + s2
    let obj = {}
    c.split('').forEach(letter => {
      if (obj[letter]) obj[letter]++
      else obj[letter] = 1;
    })
    return Object.keys(obj).sort().join('')
  }

//   Best practice

const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')
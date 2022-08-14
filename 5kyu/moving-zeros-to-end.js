// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) {
    let zeroArr = []
    arr.forEach((element, index) => {
      if (element == 0) {
        zeroArr.push(element)
        arr.splice(index, 1)
      }
    })
    return arr.concat(zeroArr)
  }

  //OR

  function moveZeros(arr) {
    let newArr = arr.filter(element => element !== 0)
    let zeroArr = arr.filter(element => element === 0)
    return newArr.concat(zeroArr)
  }

  // Best Practice


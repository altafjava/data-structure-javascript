const question = `Implement a function called "countUniqueValues", which accepts a sorted array and counts the unique values in the array. There can be negative numbers in the array but it will always be sorted.`

const program = function sumZero(arr) {
  if (arr.length == 0) {
    return []
  }
  let i = 0
  let j = i + 1
  while (j != arr.length) {
    if (arr[i] == arr[j]) {
      j++
    } else {
      i++
      arr[i] = arr[j]
    }
  }
  return arr.splice(0, i + 1)
}
const sortedArray = [1, 1, 1, 2, 3, 3, 4, 4, 5, 6] // return [1,2,3,4,5,6]
// const sortedArray = [-5, 1, 1, 2, 4, 4, 7, 13] // returns [-5,1,2,4,7,13]
// const sortedArray = [] // returns [-5,1,2,4,7,13]
const output = program(sortedArray.slice(0, sortedArray.length))
const questionElement = document.getElementById('question')
questionElement.innerHTML = question
const programElement = document.getElementById('program')
const input = `arr = ${JSON.stringify(sortedArray)}`
const inputElement = document.getElementById('input')
inputElement.innerHTML = `<pre>${input}</pre>`
const outputElement = document.getElementById('output')
programElement.innerHTML = `<pre>${program}</pre>`
outputElement.innerHTML = `<pre>${output}</pre>`

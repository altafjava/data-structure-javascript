const question = `Write a function called "sumZero" which accepts a sorted array of integers. The function should find the first pair where the sum is zero. Return an array that includes both values that sum to zero or undefined if a pair does not exist.`

const program = function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == 0) {
        return [arr[i], arr[j]]
      }
    }
  }
}
const sortedArray = [-3, -2, -1, 0, 1, 2, 3, 4] // returns [-3,3]
// const sortedArray = [-30, -20, -10, 0, 1, 2, 3, 4] // returns undefined
const output = program(sortedArray)

const questionElement = document.getElementById('question')
questionElement.innerHTML = question
const programElement = document.getElementById('program')
const input = `arr = ${JSON.stringify(sortedArray)}`
const inputElement = document.getElementById('input')
inputElement.innerHTML = `<pre>${input}</pre>`
const outputElement = document.getElementById('output')
programElement.innerHTML = `<pre>${program}</pre>`
outputElement.innerHTML = `<pre>${output}</pre>`

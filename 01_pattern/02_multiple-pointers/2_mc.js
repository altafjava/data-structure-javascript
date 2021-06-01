const question = `Write a function called "sumZero" which accepts a sorted array of integers. The function should find the first pair where the sum is zero. Return an array that includes both values that sum to zero or undefined if a pair does not exist.`

const program = function sumZero(arr) {
  let left = 0
  let right = arr.length - 1
  while (left < right) {
    const sum = arr[left] + arr[right]
    if (sum == 0) {
      return [arr[left], arr[right]]
    } else if (sum > 0) {
      right--
    } else {
      left++
    }
  }
}
const sortedArray = [-4, -3, -2, -1, 0, 1, 2, 5] // returns [-2,2]
// const sortedArray = [-4, -3, -1, 0, 2, 5] // returns undefined
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

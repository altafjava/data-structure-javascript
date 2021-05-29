const question = `Write a function called "same", which accepts 2 arrays. The funtion should true if every value in the array has its corresponding  value squared in the second array. The frequency of values must be the same.`

const program = function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return "Both array's length must be same"
  }
  const frequencyCounter1 = {}
  const frequencyCounter2 = {}
  for (let a of arr1) {
    frequencyCounter1[a] = (frequencyCounter1[a] || 0) + 1
  }
  for (let a of arr2) {
    frequencyCounter2[a] = (frequencyCounter2[a] || 0) + 1
  }
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false
    }
  }
  return true
}
const ar1 = [1, 2, 3, 2]
const ar2 = [4, 9, 1, 4]
const output = program(ar1, ar2.slice(0, ar2.length))

const questionElement = document.getElementById('question')
questionElement.innerHTML = question
const programElement = document.getElementById('program')
const input = `arr1 = ${JSON.stringify(ar1)} <br/>arr2 = ${JSON.stringify(ar2)}`
const inputElement = document.getElementById('input')
inputElement.innerHTML = `<pre>${input}</pre>`
const outputElement = document.getElementById('output')
programElement.innerHTML = `<pre>${program}</pre>`
outputElement.innerHTML = `<pre>${output}</pre>`

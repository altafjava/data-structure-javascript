const question = `Write a function called "same", which accepts 2 arrays. The funtion should true if every value in the array has its corresponding  value squared in the second array. The frequency of values must be the same.`

const program = function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return "Both array's length must be same"
  }
  for (let i = 0; i < arr1.length; i++) {
    const sqr = arr1[i] * arr1[i]
    const index = arr2.indexOf(sqr)
    if (index === -1) {
      return false
    }
    arr2.splice(index, 1)
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

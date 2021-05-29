const question = `Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase or name formed by rearranging the letters of another, such as cinema formed from iceman.`

const program = function isValidAnagaram(s1, s2) {
  if (s1.length !== s2.length) {
    return false
  }
  const frequencyCounter1 = {}
  for (let s of s1) {
    frequencyCounter1[s] = frequencyCounter1[s] == undefined ? 1 : frequencyCounter1[s] + 1
  }
  for (let i = 0; i < s2.length; i++) {
    let ch = s2[i]
    if (!frequencyCounter1[ch]) {
      return false
    } else {
      frequencyCounter1[ch] = frequencyCounter1[ch] - 1
    }
  }
  return true
}
const x = 'iceman'
const y = 'cinema'
const output = program(x, y)

const questionElement = document.getElementById('question')
questionElement.innerHTML = question
const programElement = document.getElementById('program')
const input = `s1 = ${x} <br/>s2 = ${y}`
const inputElement = document.getElementById('input')
inputElement.innerHTML = `<pre>${input}</pre>`
const outputElement = document.getElementById('output')
programElement.innerHTML = `<pre>${program}</pre>`
outputElement.innerHTML = `<pre>${output}</pre>`

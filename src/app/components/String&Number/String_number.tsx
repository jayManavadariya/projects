"use client"
import React, { useState } from 'react'

const String_number = () => {

    const [stringInput, setStringInput] = useState('')
    const [numberInput, setNumberInput] = useState('')

    const handleReverse = () => {
         alert(`Reversed: ${stringInput.split('').reverse().join('')}`);
    }

    const handleIsPalindrome = () => {
        const string = stringInput.toLowerCase()
        const reversedString = string.split('').reverse().join('')
        const isPalindrome = string === reversedString
        alert(`IsPalindrome : ${isPalindrome}`)
    }

    const handleCountVowels = () => {
        const count = stringInput.toLowerCase().match(/[aeiou]/gi)?.length 
        alert(`Vowels present in string are: ${count}`)
    }

    const handleFactorial = () => {
        const num = parseInt(numberInput)
        if(isNaN(num) || num < 0){
            alert('Plese enter a non negative number')
            return
        }
        let ans = 1;
        for(let i = 2; i <= num; i++){
            ans = ans * i
        }
        alert(`Factorial: ${ans}`)
    }

    const handleFibonacci = () => {
        const number = parseInt(numberInput)
        let a =  0, b= 1 , next
        for(let i = 1; i < number; i++){
            console.log(`Fibonacci: ${a}`)
            next = a +b
            a = b
            b = next
        }
    }


  return (
     <>
        <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">String and Number Operations</h2>

        {/* String Section */}
        <div className="mb-8">
          <label htmlFor="string-input" className="block text-sm font-medium text-gray-800 mb-2">
            String:
          </label>
          <input
            id="string-input"
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-black"
            value={stringInput}
            onChange={(e) => setStringInput(e.target.value)}
            placeholder="Enter a string"
          />
          <div className="mt-4 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={handleReverse}
              className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
            >
              Reverse
            </button>
            <button
              type="button"
              onClick={handleIsPalindrome}
              className="px-4 py-2 bg-green-500 text-white font-semibold rounded-md shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
            >
              Is Palindrome
            </button>
            <button
              type="button"
              onClick={handleCountVowels}
              className="px-4 py-2 bg-purple-500 text-white font-semibold rounded-md shadow-sm hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors"
            >
              Count Vowels
            </button>
          </div>
        </div>

        <hr className="my-6 border-gray-200" />

        {/* Number Section */}
        <div>
          <label htmlFor="number-input" className="block text-sm font-medium text-gray-700 mb-2">
            Number:
          </label>
          <input
            id="number-input"
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-black"
            value={numberInput}
            onChange={(e) => setNumberInput(e.target.value)}
            placeholder="Enter a number"
          />
          
          <div className="mt-4 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={handleFactorial}
              className="px-4 py-2 bg-yellow-500 text-white font-semibold rounded-md shadow-sm hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-colors"
            >
              Factorial
            </button>
            <button
              type="button"
              onClick={handleFibonacci}
              className="px-4 py-2 bg-red-500 text-white font-semibold rounded-md shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors"
            >
              Fibonacci
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default String_number
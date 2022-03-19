const word = 'allow'
console.log(word)

let guess = document.getElementById('input').value
console.log(guess)

const divs = document.querySelectorAll('div')

 for ( let index in guess){
        let letter = guess[index]
        let div = divs[index]
        div.textContent = letter 
        console.log(letter)
    
   
 }

// get user input from text box 
// display each letter from input in own box? 
// see if each element in input matches the word variable
// if letter in word .match user input 
// make letter that match  and is in right positon green 
// letter that matches but not in right position yellow
// wrong letter red 

// after user has input 6 times, reveal word and show message you lost 
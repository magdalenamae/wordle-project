const word = 'allow'
console.log(word)


let input = document.getElementById('input')
console.log(input)
   
input.addEventListener('keypress', function (e) {
    let guess = input.value
    for (let index in guess){
        let letter = guess[index]
        let div = divs[index]
        div.textContent = letter 
        console.log(letter)

        // if (e.key === 'Enter') {
        //     console.log(input.value)
        //     divs.textContent = letter
        // }

    }
});  

const divs = document.querySelectorAll('div')



// get user input from text box 
// display each letter from input in own box? 
// see if each element in input matches the word variable
// if letter in word .match user input 
// make letter that match  and is in right positon green 
// letter that matches but not in right position yellow
// wrong letter red 

// after user has input 6 times, reveal word and show message you lost 
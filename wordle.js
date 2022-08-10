
let columnIndex = 0
let rowIndex = 0

let input = document.getElementById('input')
console.log(input)

let rows = document.querySelectorAll('.row')
console.log(rows)

input.addEventListener('input', function(e){
    let textValue = input.value
    // index is the positon number     
    for(index in textValue){
       
        let outputRow = rows[rowIndex].children
        let character = textValue[index]
        let box = outputRow[index]
      
        box.textContent = character
    }
    console.log(textValue)
    let guessWord = textValue.split('')
    console.log(guessWord)
    // outputElement.textContent = inputCharacter
})
  

// set event listener for submit,         

submit.addEventListener('click', function(){
    const submit = document.getElementById('submit')
    // guess word = letters in field             
    let guessWord = input.value.toUpperCase()
    columnIndex = 0

    let targetLetters = targetWord.split('')
    console.log(targetLetters)
    
    for (index in targetLetters){
        let letter = targetLetters[index]
        let inputCharacter = guessWord[index]
        let outputRow = rows[rowIndex].children
        let outputElement = outputRow[0]

        if (targetWord == guessWord){
            outputElement.classList.add('correct')
            const paragraph = document.querySelector('p')
            paragraph.textContent = ('YOU WON!!!')
            targetLetters.splice(index,1, ' ')
            submit.textContent = 'Start Over'
            submit.addEventListener('click', function(){
                location.reload()
            })
        } else if (inputCharacter == letter){
            targetLetters.splice(index,1, ' ')
            outputElement.classList.add('correct')
            targetLetters.splice(index,1, ' ')
        } 
    }
    console.log(targetLetters)

    for (let index in guessWord){
        let outputRow = rows[rowIndex].children
        if (guessWord.length <= 5){
            let letter = targetLetters[index]
            let inputCharacter = guessWord[index]
            let outputElement = outputRow[index]
            let targetCharacter = targetWord[index]
            columnIndex += 1
            if (targetCharacter == inputCharacter){
                targetLetters.splice(index, 1, ' ')
                outputElement.classList.add('correct')
                console.log(targetLetters)
           }else if (targetLetters.includes(inputCharacter)){
                console.log(letter +inputCharacter)
                outputElement.classList.add('halfcorrect')
            }else if(guessWord != targetWord){
                // console.log(outputElement)
                outputElement.classList.add('notcorrect')
            } 
        }  
        
    input.value = '';
    console.log(input.value)

    }
    rowIndex += 1
    console.log(rowIndex)
    if (rowIndex >=  6 ){
        const paragraph = document.querySelector('p')
        paragraph.textContent = ('YOU LOST!')
        console.log('you lost')
    }
})

console.log(targetWord)





// green = correct letter and positon 
// yellow = correct letter wrong positon 
// grey = not in the variable word

// for (answer = i; i = word.length; i++)
// check each letter in answer to see if the letter = green, yellow or grey 
// if letter. match variable color change class styles 

// when enter button is clicked change row
// when user has complete the 5th row log message 'out of tries for today'
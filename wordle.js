const targetWord = 'world'

console.log(targetWord)
let columnIndex = 0


let input = document.getElementById('input')
console.log(input)

let rows = document.querySelectorAll('.row')
console.log(rows)
// acess each row speacidically 
// acces all as children 
//update output row in each itteration of the for loop 


let rowIndex = 0

// on each key press display key value in box 
// display each letter in each div(letter)
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
    // outputElement.textContent = inputCharacter
    
})
  
// check the inputs conditonns and apply the nesscary class
// outputElement.classList.add('correct')
// get word that is submit 
// check agaisnt target word and each position   
//display message 'you won' 
// goes to new row 
// updates color class   
submit.addEventListener('click', function(){
    const submit = document.getElementById('submit')
    // guess word = letters in field             
    let guessWord = input.value
    columnIndex = 0
    // postion of each letter in input  
    for (let index in guessWord){
        // the set of divs in each row
        let outputRow = rows[rowIndex].children
        if (guessWord.length <= 5){
            
            // each character in the guesword - user types in 
            let inputCharacter = guessWord[index]
            // each div in the row  
            let outputElement = outputRow[index]
            // each letter in the target word 
            let targetCharacter = targetWord[index]
        
            // columnIndex += 1
            // when word is typed and button is clicked grab aeverything you need from input box
            //submit button seperate
           if (inputCharacter == targetCharacter){
              
                outputElement.classList.add('correct')

            } else if (targetWord.includes(inputCharacter)){
                console.log('i work')
                outputElement.classList.add('halfcorrect')

            }else if(guessWord != targetWord){
                // console.log(outputElement)
                outputElement.classList.remove('correct')

            }
            
            
        }  
        
    input.value = '';
    console.log(input.value)

    }
  
    rowIndex += 1
    console.log(rowIndex)
   
})

        

    
        




// green = correct letter and positon 
// yellow = correct letter wrong positon 
// grey = not in the variable word

// for (answer = i; i = word.length; i++)
// check each letter in answer to see if the letter = green, yellow or grey 
// if letter. match variable color change class styles 

// when enter button is clicked change row
// when user has complete the 5th row log message 'out of tries for today'
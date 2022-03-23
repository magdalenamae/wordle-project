const targetWord = 'allow'

console.log(targetWord)
let columnIndex = 0


let input = document.getElementById('input')
console.log(input)

let row = document.querySelectorAll('.row')
console.log(row)
// acess each row speacidically 
// acces all as children 
//update output row in each itteration of the for loop 


let rowIndex = 0

        input.addEventListener('keypress', function(e) {
            
            let guessWord = input.value
                columnIndex = 0

                for (let index in guessWord){
                    let outputRow = row[rowIndex].children
                    if (guessWord.length <= 5){
                        
                        let inputCharacter = guessWord[index]
                        let outputElement = outputRow[index]
                        let targetCharacter = targetWord[index]
                
                        outputElement.textContent = inputCharacter 
                    
                        columnIndex += 1
                        // when word is typed and button is clicked grab aeverything you need from input box
                        //submit button seperate
                        if (guessWord.length == 5 && guessWord == targetCharacter){

                            submit.addEventListener('click', function() {
                                outputElement.classList.add('correct')
                            })                               
                        
                        } else if (inputCharacter == targetCharacter){
                            submit.addEventListener('click', function() {
                            outputElement.classList.add('correct')
                        })

                        } else if(guessWord != targetWord){
                            // console.log(outputElement)
                            outputElement.classList.remove('correct')
                        } 
                        
                    
                    }  
                    
                    
                
                }

                    input.addEventListener('change',function(){
                    input.value='';
                     },false);

        }); 
        
        submit.addEventListener('click', function(){
            const submit = document.getElementById('submit')
            
            // outputElement.classList.add('correct')
            // get word that is submit 
            // check agaisnt target word and each position 
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
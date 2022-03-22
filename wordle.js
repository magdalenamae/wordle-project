const targetWord = 'allow'
console.log(targetWord)
let counter = 0


let input = document.getElementById('input')
console.log(input)

let row = document.querySelector('.row')
let output = row.querySelectorAll('.letter')
let rowIndex = 0

        input.addEventListener('keypress', function(e) {
            
            let guessWord = input.value
                counter = 0

                for (let index in guessWord){
                    if (guessWord.length <= 5){
                        
                        let inputCharacter = guessWord[index]
                        let outputElement = output[index]
                        let targetCharacter = targetWord[index]
                
                        outputElement.textContent = inputCharacter 
                    
                        counter += 1
                        
                        if (guessWord.length == 5 && guessWord == targetWord){

                        const submit = document.getElementById('submit')

                        submit.addEventListener('click', function() {
                            outputElement.classList.add('correct')
                            const message = document.getElementById('p')
                            message.textContent = 'You won!'
                           
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
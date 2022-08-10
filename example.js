
function wordleColors(targetWord, guessWord) {

    // Array of letters used in the target word e.g. ['a', 'l', 'l', 'o', 'w']
    const unusedTargetWordLetters = targetWord.split('')
    // Whenever we make a letter coloured, we remove one from this array. That's how we know not to use it again.

    // Alternative: Use an object of letter counts: {'a': 1, 'l': 2, 'o': 1, 'w': 1}

    // Check for green letters
    for (const index in guessWord) {
        const guessLetter = guessWord[index]
        if (targetWord[index] === guessLetter) {
            // Letter in same position matches, must be green!
            console.log(`Make letter ${index} green (${guessWord[index]})`)

            // We remove that letter from the list of letters used
            // to remember that we have used it already
            const usedLetterIndex = unusedTargetWordLetters.indexOf(guessLetter)
            // Delete 1 letter at that position from the array
            unusedTargetWordLetters.splice(usedLetterIndex, 1)
            console.log('Remaining letters', unusedTargetWordLetters)
        }
    }

    // Check for yellow letters
    for (const index in guessWord) {
        const guessLetter = guessWord[index]
        // console.log(guessLetter)
        // console.log(unusedTargetWordLetters)
        // If it's not green AND matches a target letter we've not used yet... 
        if (guessLetter != targetWord[index] && unusedTargetWordLetters.includes(guessLetter)) {
            // This guess letter is one of the letters from the target word
            // One that we haven't used yet!
            console.log(`Make letter ${index} yellow (${guessWord[index]})`)

            // We remove that letter from the list of letters used
            // to remember that we have used it already.
            const usedLetterIndex = unusedTargetWordLetters.indexOf(guessLetter)
            // Delete 1 letter at that position from the array
            unusedTargetWordLetters.splice(usedLetterIndex, 1)
            console.log('Remaining letters', unusedTargetWordLetters)
        }
    }
}

// Test a word where there are duplicates in both target and guess
console.log('Target: allow, Guess: atoll (a should be green, oll should be yellow)')
wordleColors('allow', 'atoll')

// // // Test a word where there's a duplicate in the guess but not the target (both yellow)
// // console.log('\nTarget: goons, Guess: asset (no green, only one s should be yellow)')
// // wordleColors('goons', 'asset')

// // // Make sure we pick the green one if there's a duplicate and one is the in the right place.
// // console.log('\nTarget: goals, Guess: hoops (o and s green, no yellow)')
// // wordleColors('goals', 'hoops')

// // // Make sure we pick the green one if there's a duplicate and one is the in the right place.
// // console.log('\nTarget: gaols, Guess: hoops (o and s green, no yellow)')
// wordleColors('gaols', 'allow')
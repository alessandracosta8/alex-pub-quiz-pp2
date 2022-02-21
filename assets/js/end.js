// Selection of elements from end.html
const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

// Get what is in localstorage OR return an empty array
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
console.log(highScores);

// Display the final score of the game in the end page
finalScore.innerText = mostRecentScore;

// Enable save button only if username is typed in
username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
})

/* Function to save the score 
-> prevent the for to default to refresh 
-> Object that has contains the most recent score and the username input from the user */
saveHighScore = e => {
    console.log('Savedgit ');
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value
    };
    console.log(score);

}
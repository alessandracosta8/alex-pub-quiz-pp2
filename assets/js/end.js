// Selection of elements from end.html
const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

// Display the final score of the game in the end page
finalScore.innerText = mostRecentScore;

// Enable save button only if username is typed in
username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
})

/* Function to save the score 
-> prevent the for to default to refresh */
saveHighScore = e => {
    console.log('Savedgit ');
    e.preventDefault();
}
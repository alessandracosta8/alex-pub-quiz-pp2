// Enable save button only if username is typed in
const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
})

/* Function to save the score 
-> prevent the for to default to refresh */
saveHighScore = e => {
    console.log('Saved');
    e.preventDefault();
}
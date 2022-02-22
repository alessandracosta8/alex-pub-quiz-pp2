// Selection of elements from end.html
const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

// Get what is in localstorage OR return an empty array
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

// Maximum number of scores displayed
const MAX_HIGH_SCORES = 5;

// Display the final score of the game in the end page
finalScore.innerText = mostRecentScore;

// Enable save button only if username is typed in
username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
})

/* Function to save the score 
-> prevent the for to default to refresh 
-> Object that has contains the most recent score and the username input from the user
-> Sorting the scores 
-> Only display the MAX_HIGH_SCORES number
-> Update localStorage, use stringify so it can be saved as JSON
-> Go back to the Home page */
saveHighScore = e => {
    console.log('Clicked Save!');
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value
    };

    highScores.push(score);
    highScores.sort((a,b) => b.score - a.score);
    highScores.splice(MAX_HIGH_SCORES);
    localStorage.setItem("highScores", JSON.stringify(highScores));
    window.location.assign("/");
}
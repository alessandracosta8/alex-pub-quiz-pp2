// Selection of elements from game.html
const question = document.querySelector('#question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const progressText = document.getElementById('progressText');
const scoreText = document.getElementById('score');
const progressBarFull = document.getElementById('progressBarFull');
const loader = document.getElementById('loader');
const game = document.getElementById('game');

/* List of questions for the quiz from Open Trivia DB 
-> Load questions from JSON in correct positions
-> Hide the loader and begin the game*/
let questions = [];
fetch('/assets/js/questions.json')
    .then((res) => {
        return res.json();
    })
    .then((loadedQuestions) => {
        questions = loadedQuestions;
        startGame();
    })
    .catch((err) => {
        console.error(err);
    });

// Variables for the game functions
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

// Constants for the game functions
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 5;

// Game functions

/* Initiate game function
-> Use of spread operator so any change to availableQuestion variable will not change the question variable */
startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
    game.classList.remove("hidden");
    loader.classList.add("hidden");
}

/* Show a new question on the page and update HUD
-> If game ran out of questions, or reached max, goes to end page
-> Add to question counter and update progress bar
-> Generate a random number to select one of the available questions in the array, .lenght to use all the available ones in the array
-> Gets rid of already used question
-> Making sure questions and answers load before letting user select a question */
getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);
        return window.location.assign("/end.html");
    }

    questionCounter++;
    progressText.innerText = `Question ${questionCounter} / ${MAX_QUESTIONS}`;
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number];
    })

    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;
}

/* Listen to user click on choice and give color feedback
-> Don't do anything on click event if game is not ready to accept answers
-> Change choice cointainer color to display if answer is correct or not
-> Check to increment score
-> show color for feedback, delay and then return to normal after 1 second (1000ms) -> show class, delay and remove class */
choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];

        const classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        if (classToApply === 'correct') {
            incrementScore(CORRECT_BONUS);
        }

        selectedChoice.parentElement.classList.add(classToApply);
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);
    })
});

// Increment score 
incrementScore = num => {
    score += num;
    scoreText.innerText = score;
}
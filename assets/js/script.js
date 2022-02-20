// Selection of elements from game.html
const question = document.querySelector('#question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const progressText = document.getElementById('progressText');
const scoreText = document.getElementById('score');
const progressBarFull = document.getElementById('progressBarFull');

// List of questions for the quiz
let questions = [{
        question: "Which of the following was not one of &quot;The Magnificent Seven&quot;?",
        choice1: "Steve McQueen",
        choice2: "Clint Eastwood",
        choice3: "Charles Bronson",
        choice4: "Robert Vaughn",
        answer: 2
    },
    {
        question: "Which movie released in 2016 features Superman and Batman fighting?",
        choice1: "Batman v Superman: Superapocalypse",
        choice2: "Batman v Superman: Black of Knight",
        choice3: "Batman v Superman: Knightfall",
        choice4: "Batman v Superman: Dawn of Justice",
        answer: 4
    },
    {
        question: "Who directed the movies &quot;Pulp Fiction&quot;, &quot;Reservoir Dogs&quot; and &quot;Django Unchained&quot;?",
        choice1: "Martin Scorcese",
        choice2: "Steven Spielberg",
        choice3: "Quentin Tarantino",
        choice4: "James Cameron",
        answer: 3
    },
    {
        question: "The Queen song `A Kind Of Magic` is featured in which 1986 film?",
        choice1: "Flash Gordon",
        choice2: "Highlander",
        choice3: "Labyrinth",
        choice4: "Howard the Duck",
        answer: 2
    },
    {
        question: "This movie contains the quote, &quot;Nobody puts Baby in a corner.&quot;",
        choice1: "Three Men and a Baby",
        choice2: "Ferris Bueller&#039;s Day Off",
        choice3: "Pretty in Pink",
        choice4: "Dirty Dancing",
        answer: 4
    }, {
        question: "What was the first James Bond film?",
        choice1: "Goldfinger",
        choice2: "Dr. No",
        choice3: "From Russia With Love",
        choice4: "Thunderball",
        answer: 2
    }, {
        question: "Who is the main protagonist in, the 1985 film, Back to the Future?",
        choice1: "Emmett &quot;Doc&quot; Brown",
        choice2: "Biff Tannen",
        choice3: "Marty McFly",
        choice4: "George McFly",
        answer: 3
    }, {
        question: "Which actor plays Obi-Wan Kenobi in Star Wars Episodes I-lll?",
        choice1: "Alec Guinness",
        choice2: "Hayden Christensen",
        choice3: "Liam Neeson",
        choice4: "Ewan McGregor",
        answer: 4
    }, {
        question: "In the movie Gremlins, after what time of day should you not feed Mogwai?",
        choice1: "Midnight",
        choice2: "Evening",
        choice3: "Morning",
        choice4: "Afternoon",
        answer: 1
    }, {
        question: "When does &quot;Rogue One: A Star Wars Story&quot; take place chronologically in the series?",
        choice1: "Between Episode 3 and 4",
        choice2: "After Episode 6",
        choice3: "Before Episode 1",
        choice4: "Between Episode 4 and 5",
        answer: 1
    }, {
        question: "In the 1992 film &quot;Army of Darkness&quot;, what name does Ash give to his double-barreled shotgun?",
        choice1: "Bloomstick",
        choice2: "Boomstick",
        choice3: "Blastbranch",
        choice4: "2-Pump Chump",
        answer: 2
    }, {
        question: "Who plays the character of Po in the Kung Fu Panda movies?",
        choice1: "Mirana Jonnes",
        choice2: "McConahey Ramses",
        choice3: "Jack Black",
        choice4: "Jim Petersson",
        answer: 3
    }, {
        question: "In the movie &quot;Blade Runner&quot;, what is the term used for human-like androids?",
        choice1: "Cylons",
        choice2: "Synthetics",
        choice3: "Skinjobs",
        choice4: "Replicants",
        answer: 4
    }, {
        question: "In the 1995 film &quot;Balto&quot;, who are Steele&#039;s accomplices?",
        choice1: "Dusty, Kirby, and Ralph",
        choice2: "Nuk, Yak, and Sumac",
        choice3: "Kaltag, Nikki, and Star",
        choice4: "Jenna, Sylvie, and Dixie",
        answer: 3
    }, {
        question: "What is the name of the island that &quot;Jurassic Park&quot; is built on?",
        choice1: "Isla Nublar",
        choice2: "Isla Sorna",
        choice3: "Isla Muerta",
        choice4: "Isla Pena",
        answer: 1
    }, {
        question: "In Big Hero 6, what fictional city is the Big Hero 6 from?",
        choice1: "San Tokyo",
        choice2: "Tokysisco",
        choice3: "San Fransokyo",
        choice4: "Sankyo",
        answer: 3
    }, {
        question: "Where does the original Friday The 13th movie take place?",
        choice1: "Camp Crystal Lake",
        choice2: "Packanack",
        choice3: "Higgins Haven",
        choice4: "Camp Forest Green",
        answer: 1
    }, {
        question: "In which film does Humphrey Bogart say the famous line, &quot;Here&#039;s looking at you, kid&quot;?",
        choice1: "Casablanca",
        choice2: "The Maltese Falcon",
        choice3: "The Treasure of the Sierra Madre",
        choice4: "Citizen Kane",
        answer: 1
    }, {
        question: "In &quot;ALF&quot;, what was ALF&#039;s real name?",
        choice1: "Gordon Milipp",
        choice2: "Gordon Foster",
        choice3: "Gordon Shumway",
        choice4: "Gordon von Gam",
        answer: 3
    }, {
        question: "The 1996 film &#039;Fargo&#039; is primarily set in which US state?",
        choice1: "North Dakota",
        choice2: "South Dakota",
        choice3: "Minnesota",
        choice4: "Wisconsin",
        answer: 3
    }
]

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
}

/* Show a new question on the page and update HUD
-> If game ran out of questions, or reached max, goes to end page
-> Add to question counter and update progress bar
-> Generate a random number to select one of the available questions in the array, .lenght to use all the available ones in the array
-> Gets rid of already used question
-> Making sure questions and answers load before letting user select a question */
getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        return window.location.assign("/end.html");
    }

    questionCounter++;
    progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
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

startGame();
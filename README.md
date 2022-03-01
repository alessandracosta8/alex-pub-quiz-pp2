# Alex's Pub Quiz project

Image

&nbsp;  

## Table of Contents
---

- [UX](#ux)
    - [Website owners goals](#website-owners-goals)
    - [Users goals](#users-goals)
    - [Wireframes](#wireframes)
    - [Website design elements](#website-design-elements)
        - [Colors](#colors)
        - [Fonts](#fonts)
        - [Images](#images)
- [Features](#features)
    - [Home page](#home-page)
    - [Game page](#game-page)
    - [End page](#end-page)
    - [Leaderboard page](#leaderboard-page)
- [Technologies used](#tecnologies-used)
- [Testing and Validation](#testing-and-validation)
    - [HTML and CSS](#html-and-css)
    - [Accessibility and Responsiveness](#accessibility-and-responsiveness)
    - [Compatibility](#compatibility)
    - [User stories testing](#user-stories-testing)
        - [Website owner](#website-owner)
        - [New visitor](#new-visitor)
        - [Returning visitor](#returning-visitor)
    - [Bugs](#bugs)
        - [From the Slack feedback request](#from-the-slack-feedback-request)
    - [Unfixed Bugs](#unfixed-bugs)
- [Deployment](#deployment)
- [Credits](#credits)


&nbsp;

## UX
---
### Website owners goals
### Users goals
### Wireframes
### Website design elements
#### Colors
#### Fonts
#### Images
&nbsp;  

## Features
---
### Home Page
Welcome message
Easy selection to start game or view score leaderboard

### Game Page
Showing Spinning loader to allow content of question and answer to load without showing only the empty page.

Showing the user the Head's up display with amount of question needed to complete the game, progress bar to give feedback on current completion of the game and total score. This all update dynamically.

User can hover and have an indication of witch answer is about to select with css animation.

Immediate feedback with color style, on click of the mouse if answer is correct or not and automatically displaing the next question of the quiz.

At completion of amount of questions requested user gets automatically directed to end page to save score and access to leaderboard.

If the user wants to play the game again, there is a larger set of question available then just the 5 requested to win, to keep the game interesting and replayable.

### End Page
Showing total score
Letting user save their username and score
Buttons only work if user first types in a username
End page shows the final score obtained in the game page once the actual game is finished, saving it in local storage, paired with the username chosen by the user.

### Leaderboard Page
Takes the scores saved in the local storage of the brownser and shows the Leaderboard with the scores saved and sorted before in the End page and directs the user back to the Home page.
The local storage is not secured and will rely on the honesty of the user playing the game.

&nbsp; 

## Technologies used
---

[Open Trivia Database](https://opentdb.com/) for the questions of the quiz.
&nbsp;  

## Testing and Validation
---
### HTML and CSS
### Accessibility and Responsiveness
### Compatibility
### User stories testing
#### Website owner
#### New visitor
#### Returning visitor
### Bugs
Links from index.html files not recognised when deployed to GitHub. I had to remove the / for the root folder for the pages to link correctly in-between themselves.


#### From the Slack feedback request
### Unfixed Bugs
&nbsp;

## Deployment
---
&nbsp;  

## Credits
---

CSS Transform properties - [Youtube](https://www.youtube.com/watch?v=rzD-cPhq02E)

CSS Animations - [Youtube](https://www.youtube.com/watch?v=YszONjKpgg4)

Traversing the DOM - [Youtube](https://www.youtube.com/watch?v=v7rSSy8CaYE)

Array.from function - [Youtube](https://www.youtube.com/watch?v=NPbDqbwtr-4)

Arrow functions - [Youtube](https://www.youtube.com/watch?v=h33Srr5J9nY)

Spread Operator [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax), [Youtube](https://www.youtube.com/watch?v=iLx4ma8ZqvQ)

.forEach Array method - [YouTube](https://www.youtube.com/watch?v=SXb5LN_opbA)

Callback functions - [YouTube](https://www.youtube.com/watch?v=670f71LTWpM)

JSON - [YouTube](https://www.youtube.com/watch?v=iiADhChRriM)

Fetch API - [YouTube](https://www.youtube.com/watch?v=cuEtnrL9-H0)

Promises - [YouTube](https://www.youtube.com/watch?v=DHvZLI7Db8E)

Build a loader W3 Schools - [Link](https://www.w3schools.com/howto/howto_css_loader.asp)

Build a quiz app with JavaScript tutorial - [YouTube playlist](https://www.youtube.com/playlist?list=PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx)


&nbsp;
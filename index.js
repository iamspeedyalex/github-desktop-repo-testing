// +1 +2 +3 Buttons
const scoreHome = document.getElementById('score-display-home');
const scoreGuest = document.getElementById('score-display-guest');

const plus1Home = document.getElementById('home-plus-1');
const plus2Home = document.getElementById('home-plus-2');
const plus3Home = document.getElementById('home-plus-3');

const plus1Guest = document.getElementById('guest-plus-1');
const plus2Guest = document.getElementById('guest-plus-2');
const plus3Guest = document.getElementById('guest-plus-3');

const maxScore = 21;
const minScore = 0;

plus1Home.addEventListener('click', function() {
    let currentScore = parseInt(scoreHome.textContent);
    currentScore = Math.min(currentScore +1, maxScore);
    scoreHome.textContent = currentScore;
    updateScoreHighlights();
})

plus2Home.addEventListener('click', function() {
    let currentScore = parseInt(scoreHome.textContent);
    currentScore = Math.min(currentScore +2, maxScore);
    scoreHome.textContent = currentScore;
    updateScoreHighlights();
})

plus3Home.addEventListener('click', function() {
    let currentScore = parseInt(scoreHome.textContent);
    currentScore = Math.min(currentScore +3, maxScore);
    scoreHome.textContent = currentScore;
    updateScoreHighlights();
})

plus1Guest.addEventListener('click', function() {
    let currentScore = parseInt(scoreGuest.textContent);
    currentScore = Math.min(currentScore +1, maxScore);
    scoreGuest.textContent = currentScore;
    updateScoreHighlights();
})

plus2Guest.addEventListener('click', function() {
    let currentScore = parseInt(scoreGuest.textContent);
    currentScore = Math.min(currentScore +2, maxScore);
    scoreGuest.textContent = currentScore;
    updateScoreHighlights();
})

plus3Guest.addEventListener('click', function() {
    let currentScore = parseInt(scoreGuest.textContent);
    currentScore = Math.min(currentScore +3, maxScore);
    scoreGuest.textContent = currentScore;
    updateScoreHighlights();
})


// Get the elements from the DOM
const foulCounterHome = document.getElementById('foul-count-home');
const plusButtonHome = document.getElementById('foul-plus-home');
const minusButtonHome = document.getElementById('foul-minus-home');

// The logic to check if the new value is within the allowed range
// Define the maximum number of fouls allowed
const maxFouls = 7;
// Define the minimum number of fouls allowed
const minFouls = 0;

// Add an event listener to the plus button
plusButtonHome.addEventListener('click', function() {
    let currentFouls = parseInt(foulCounterHome.textContent);
    
    // Check if the current fouls are less than the limit
    if (currentFouls < maxFouls) {
        currentFouls += 1; // Increase the count by one
        foulCounterHome.textContent = currentFouls; // Update the displayed number
    }
});

// Add an event listener to the minus button
minusButtonHome.addEventListener('click', function() {
    let currentFouls = parseInt(foulCounterHome.textContent);
    
    // Check if the current fouls are more than the minimum
    if (currentFouls > minFouls) {
        currentFouls -= 1; // Decrease the count by one
        foulCounterHome.textContent = currentFouls; // Update the displayed number
    }
})

// Get the elements from the DOM
const foulCounterGuest = document.getElementById('foul-count-guest');
const plusButtonGuest = document.getElementById('foul-plus-guest');
const minusButtonGuest = document.getElementById('foul-minus-guest');

// Add an event listener to the plus button
plusButtonGuest.addEventListener('click', function() {
    let currentFouls = parseInt(foulCounterGuest.textContent);
    
    // Check if the current fouls are less than the limit
    if (currentFouls < maxFouls) {
        currentFouls += 1; // Increase the count by one
        foulCounterGuest.textContent = currentFouls; // Update the displayed number
    }
});

minusButtonGuest.addEventListener('click', function() {
    let currentFouls = parseInt(foulCounterGuest.textContent);
    
    if (currentFouls > minFouls) {
        currentFouls -= 1;
        foulCounterGuest.textContent = currentFouls;
    }
})

function updateScoreHighlights() {
    const homeCurrentScore = parseInt(scoreHome.textContent);
    const guestCurrentScore = parseInt(scoreGuest.textContent);
    
    scoreHome.classList.remove('leading', 'winner');
    scoreGuest.classList.remove('leading', 'winner');
    
    if (homeCurrentScore >= maxScore) {
        scoreHome.classList.add('winner');
    } else if (guestCurrentScore >= maxScore) {
        scoreGuest.classList.add('winner');
    } else if (homeCurrentScore > guestCurrentScore) {
        scoreHome.classList.add('leading');
    } else if (guestCurrentScore > homeCurrentScore) {
        scoreGuest.classList.add('leading');
    }
}
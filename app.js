// import functions and grab DOM elements
const shell1Button = document.getElementById('shell1-button');
const shell2Button = document.getElementById('shell2-button');
const shell3Button = document.getElementById('shell3-button');

const shell1Container = document.getElementById('shell1');
const shell2Container = document.getElementById('shell2');
const shell3Container = document.getElementById('shell3');

const winsEl = document.getElementById('wins');
const lossesEl = document.getElementById('losses');
const totalEl = document.getElementById('total');
// let state
let winCount = 0;
let totalCount = 0;

const choices = ['shell1', 'shell2', 'shell3'];
// set event listeners 

shell1Button.addEventListener('click', () =>{
    const location = Math.floor(Math.random() * 3);
    const ballLocation = choices[location];
    console.log('Button 1', ballLocation);
    handleGuess('shell1', ballLocation);
});

shell2Button.addEventListener('click', () =>{
    const location = Math.floor(Math.random() * 3);
    const ballLocation = choices[location];
    console.log('Button 2', ballLocation);
    handleGuess('shell2', ballLocation);
});

shell3Button.addEventListener('click', () =>{
    const location = Math.floor(Math.random() * 3);
    const ballLocation = choices[location];
    console.log('Button 3', ballLocation);
    handleGuess('shell3', ballLocation);
});
  // get user input
  // use user input to update state 

function handleGuess(userGuess, answer) {
    // reset classList
    shell1Container.classList.remove('ball');
    shell2Container.classList.remove('ball');
    shell3Container.classList.remove('ball');
    // update total count
    totalCount++;
    // check if userGuess === answer & update winCount if needed
    if (userGuess === answer){
        winCount++;
    }
    // if, else if, else statements to show the actual location of the ball
    if (answer === 'shell1'){
        shell1Container.classList.add('ball');
    } else if (answer === 'shell2') {
        shell2Container.classList.add('ball');
    } else {
        shell3Container.classList.add('ball');
    }

    //update counters in DOM to reflect new state
    totalEl.textContent = totalCount;
    winsEl.textContent = winCount;
    lossesEl.textContent = totalCount - winCount;
}
  // update DOM to reflect the new state

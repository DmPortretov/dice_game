var random1 = Math.floor(Math.random() * 5) + 1;
var random2 = Math.floor(Math.random() * 5) + 1;

var random1image = 'img/dice' + random1 + '.png';
var random2image = 'img/dice' + random2 + '.png';

document.querySelector('#player1').setAttribute('src', random1image);
document.querySelector('#player2').setAttribute('src', random2image);

if (random1 > random2) {
    document.querySelector('h1').innerHTML = 'Congratulations! Player 1 wins!'
} else if (random1 < random2) {
    document.querySelector('h1').innerHTML = 'Congratulations! Player 2 wins!'
} else {
    document.querySelector('h1').innerHTML = 'Draw!'
}

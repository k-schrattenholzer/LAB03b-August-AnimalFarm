// import functions and grab DOM elements
import { playSoundChangeText } from './utils';

//
const horseEl = document.getElementById('horse-img');
const dogEl = document.getElementById('dog-img');
const catEl = document.getElementById('cat-img');
//
const horseSound = document.getElementById('horse-sound');
const dogSound = document.getElementById('dog-sound');
const catSound = document.getElementById('cat-sound');


//

catEl.addEventListener('click', () => {
    playSoundChangeText(catSound, 'little kitten');
});
dogEl.addEventListener('click', () => {
    playSoundChangeText(dogSound, 'sweet pupper');
});
horseEl.addEventListener('click', () => {
    playSoundChangeText(horseSound, 'majestic horse');
});

//listen for when the user hits a key, when they do examine this event thing. event is a callback here
document.addEventListener('keydown', (event) => {
    if (event.key === 'c') {
        alert('you pressed C - C is for CAT');
        playSoundChangeText(catSound, 'little kitten');
    }
    if (event.key === 'd') {
        alert('you pressed D - D is for DOG');
        playSoundChangeText(dogSound, 'sweet pupper');
    }
    if (event.key === 'h') {
        alert('you pressed H - H is for HORSE');
        playSoundChangeText(horseSound, 'majestic horse');
    }
});




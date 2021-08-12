// import functions and grab DOM elements
const headerEl = document.getElementById('animal-click');
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
    catSound.play ();
    headerEl.textContent = "Cat";
});
dogEl.addEventListener('click', () => {
    dogSound.play ();
    headerEl.textContent = "Dog";
});
horseEl.addEventListener('click', () => {
    horseSound.play ();
    headerEl.textContent = "Horse";
});

//listen for when the user hits a key, when they do examine this event thing. event is a callback here
document.addEventListener('keydown', (event) => {
    if (event.key === 'c') {
        alert('you pressed C - C is for CAT');
        catSound.play ();
    }
    if (event.key === 'd') {
        alert('you pressed D - D is for DOG');
        dogSound.play ();
    }
    if (event.key === 'h') {
        alert('you pressed H - H is for HORSE');
        horseSound.play ();
    }
});
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


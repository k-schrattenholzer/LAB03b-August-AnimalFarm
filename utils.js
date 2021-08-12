//
const headerEl = document.getElementById('animal-click');

//Re-factored Code
export function playSoundChangeText(animalSound, animalName) {
    animalSound.play();
    headerEl.textContent = animalName;
    setTimeout(() => {
        headerEl.textContent = 'Pick another!';
    }, 3000);
}
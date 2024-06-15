const phrases = [
    "< Web Developer />",
    "< Software Engineer />",
];

let currentPhraseIndex = 0;
let currentCharIndex = 0;
const typingSpeed = 100; // Milisegundos entre caracteres
const deletingSpeed = 50; // Milisegundos entre caracteres al borrar
const delayBetweenPhrases = 2000; // Milisegundos de espera entre frases
const typewriterTextElement = document.getElementById("typewriter-text");

function typePhrase() {
    if (currentCharIndex < phrases[currentPhraseIndex].length) {
        typewriterTextElement.textContent += phrases[currentPhraseIndex].charAt(currentCharIndex);
        currentCharIndex++;
        setTimeout(typePhrase, typingSpeed);
    } else {
        setTimeout(deletePhrase, delayBetweenPhrases);
    }
}

function deletePhrase() {
    if (currentCharIndex > 0) {
        typewriterTextElement.textContent = phrases[currentPhraseIndex].substring(0, currentCharIndex - 1);
        currentCharIndex--;
        setTimeout(deletePhrase, deletingSpeed);
    } else {
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        setTimeout(typePhrase, typingSpeed);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    typePhrase();
});


function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

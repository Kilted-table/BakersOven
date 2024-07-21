document.addEventListener('DOMContentLoaded', () => {
    const backgroundMusic = document.getElementById('background-music');
    backgroundMusic.play();

    const character = document.createElement('div');
    character.classList.add('character');
    document.body.appendChild(character);

    let isMovingRight = true;
    let characterPosition = 50;

    function moveCharacter() {
        if (isMovingRight) {
            characterPosition += 2;
            if (characterPosition >= window.innerWidth - 50) {
                isMovingRight = false;
                character.style.transform = 'scaleX(-1) translateX(-50%)';
            }
        } else {
            characterPosition -= 2;
            if (characterPosition <= 0) {
                isMovingRight = true;
                character.style.transform = 'scaleX(1) translateX(-50%)';
            }
        }
        character.style.left = characterPosition + 'px';
        requestAnimationFrame(moveCharacter);
    }

    moveCharacter();
});

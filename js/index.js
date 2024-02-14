// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function () {
    const letter = document.getElementById('Letter');
    const letterText = document.getElementById('Text');
    letterText.style.width = letter.offsetWidth + 'px';
    letterText.style.height = letter.offsetWidth + 'px';

    const violet = document.getElementById('VioletEvergarden');
    const popUp = document.getElementById('pop-up');
    const HymnOfTheSea = document.getElementById('HymnOfTheSea');

    violet.addEventListener('click', () => {
        popUp.style.opacity = 100;
        popUp.style.zIndex = 2;
        HymnOfTheSea.play();
    });

    const buttons = document.querySelectorAll('.pop-up__option');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            popUp.style.opacity = 0;
            popUp.style.zIndex = 0;
            HymnOfTheSea.pause();
            HymnOfTheSea.currentTime = 0;
            popUp.style.fontFamily = 'Telsis';
        });
    });


    const translateBtn = document.getElementById('Translate');
    translateBtn.addEventListener('click', () => {
        // Toggle the font of the pop-up letter
        if (popUp.style.fontFamily === 'Telsis') {
            popUp.style.fontFamily = 'Cormorant Infant';
        } else {
            popUp.style.fontFamily = 'Telsis';
        }  
    });
});

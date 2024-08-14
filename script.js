document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('surpriseButton');
    const surpriseMessage = document.getElementById('surpriseMessage');

    button.addEventListener('click', function() {
        if (surpriseMessage.style.display === 'none' || surpriseMessage.style.display === '') {
            surpriseMessage.style.display = 'block';
            button.style.display = 'none'; // Hide the button after clicking
        }
    });
});

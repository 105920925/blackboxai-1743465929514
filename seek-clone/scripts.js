// JavaScript for Seek Clone
document.addEventListener('DOMContentLoaded', function() {
    const applyButtons = document.querySelectorAll('button');

    applyButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Application submitted!');
        });
    });
});
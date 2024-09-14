var toggleButton = document.getElementById('toggle-PERSONALITYTRAITS');
var PERSONALITYTRAITS = document.getElementById('PERSONALITYTRAITS');
toggleButton.addEventListener('click', function () {
    if (PERSONALITYTRAITS.style.display === 'none') {
        PERSONALITYTRAITS.style.display = 'block';
    }
    else {
        PERSONALITYTRAITS.style.display = 'none';
    }
});
var toggleButton2 = document.getElementById('toggle-skills');
var skills = document.getElementById('skills');
toggleButton.addEventListener('click', function () {
    if (skills.style.display === 'none') {
        skills.style.display = 'block';
    }
    else {
        skills.style.display = 'none';
    }
});

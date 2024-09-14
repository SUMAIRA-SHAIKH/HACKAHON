const toggleButton = document.getElementById('toggle-PERSONALITYTRAITS') as HTMLButtonElement;
const PERSONALITYTRAITS = document.getElementById('PERSONALITYTRAITS') as HTMLElement 


toggleButton.addEventListener('click',() => {
    if(PERSONALITYTRAITS.style.display === 'none') {
        PERSONALITYTRAITS.style.display = 'block'
    } else {
        PERSONALITYTRAITS.style.display = 'none'
    }
});


const toggleButton2 = document.getElementById('toggle-skills') as HTMLButtonElement;
const skills = document.getElementById('skills') as HTMLElement 


toggleButton.addEventListener('click',() => {
    if(skills.style.display === 'none') {
        skills.style.display = 'block'
    } else {
        skills.style.display = 'none'
    }
});
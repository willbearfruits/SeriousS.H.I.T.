const acronyms = [
    ['Serious', 'Homemade', 'Insane', 'Technology'],
    ['Super', 'Hyper', 'Incredible', 'Things'],
    ['Sound', 'Hardware', 'Innovation', 'Tech'],
    ['Sonic', 'Havoc', 'Inducing', 'Tools'],
    ['Salvaged', 'Hardware', 'Into', 'Torture'],
    ['Strange', 'Heavy', 'Irritating', 'Toys'],
    ['Self-destructive', 'Harmonic', 'Interference', 'Thing'],
    ['Solder', 'Heat', 'Insanity', 'Therapy'],
    ['Seriously', 'Harsh', 'Industrial', 'Tones'],
    ['Stupidly', 'Horrible', 'Interesting', 'Trash'],
    ['Sonic', 'Hell', 'In', 'Transistors'],
    ['Small', 'Handmade', 'Illegal', 'Toys'],
    ['Suspicious', 'Homegrown', 'Irritant', 'Technology'],
    ['Snarling', 'Heinous', 'Infernal', 'Tremolo'],
    ['Sinister', 'Handwired', 'Infuriating', 'Torment']
];

let lastIndex = -1;

function generateNew() {
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * acronyms.length);
    } while (newIndex === lastIndex && acronyms.length > 1);
    
    lastIndex = newIndex;
    
    const acronymDiv = document.getElementById('acronym');
    if (!acronymDiv) return;

    acronymDiv.style.opacity = '0';
    
    setTimeout(() => {
        const chosen = acronyms[newIndex];
        acronymDiv.textContent = `${chosen[0]} ${chosen[1]} ${chosen[2]} ${chosen[3]}`;
        acronymDiv.style.opacity = '1';
    }, 150);
}

document.addEventListener('DOMContentLoaded', () => {
    const genContainer = document.querySelector('.generator-container');
    if (genContainer) {
        // Initial generation
        setTimeout(generateNew, 500);
        
        // Click listener
        genContainer.addEventListener('click', generateNew);
    }
});

console.log('Funguje');
const MINIMUM = 100;
const PRIBEH = 1;
const jmenoUzivatele = window.prompt('Jak chceš, abychom ti říkali?' , 'Jméno tvého nicku');
window.alert(`Vítej v naší hře, ${jmenoUzivatele}!`);

let storyNumber = window.prompt('Jaký storyline by jsi si chtěl zahrát? (Momentálně můžeš vybrat jen 1)', 1);
//window.confirm('Je ti opravdu ' + Number(vekUzivatele) + 'let?');

if (storyNumber === PRIBEH) {
    window.alert(`Zvolil jsi příběh číslo ${storyNumber}!`);
}

else if (storyNumber > PRIBEH) {
    window.alert("Prosím vyber číslo příběhu (možné odpovědi: 1)");
    let storyNumber = window.prompt('Jaký storyline by jsi si chtěl zahrát? (Momentálně můžeš vybrat jen 1)', 1);
}

else if (storyNumber < PRIBEH) {
    window.alert("Prosím vyber číslo od jedné do tří!")
    let storyNumber = window.prompt('Jaký storyline by jsi si chtěl zahrát? (Momentálně můžeš vybrat jen 1)', 1);
}

else {
    if (!isNaN(storyNumber)) {
        console.alert(`Zvolil jsi příběh číslo ${storyNumber}!`);
    }
    else {
        console.alert(`To není číslo, prosím zadej číslo příběhu`);
    }
    vekUzivatele = window.prompt(`Zvolil jsi příběh číslo ${storyNumber}!`, 1);
}
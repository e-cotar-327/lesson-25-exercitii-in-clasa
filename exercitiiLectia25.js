// Exercitiul 1
/*
Scrieți o funcție de traducere numită helloWorld care:
acceptă 1 argument, un cod de limbă (ex. „es”, „de”, „en”)
returnează „Hello, World!” pentru limba dată, pentru cel puțin 3 limbi. Ar trebui să returneze implicit limba engleză.
Apelați acea funcție pentru fiecare dintre limbile acceptate și înregistrați rezultatul pentru a vă asigura că funcționează.
*/
function helloWorld(language) {
    switch (language) {
        case 'fr':
            console.log('Bonjour, le monde!');
            break;
        case 'ro':
            console.log('Salut, lume!');
            break;
        case 'ru':
            console.log('Privet mir!');
            break;
        default:
            console.log('Hello world!');
            break;
    }
}
helloWorld('fr');
if (language == 'fr') {
    return 'Bonjour, le monde!';
} else if (language == 'ro') {
    return 'Salut, lume!';
} else if (language == 'ru') {
    return 'Privet mir!';
} else {
    return 'Hello world!';
}

//console.log(helloWorld('fr'));
//console.log(helloWorld('ro'));
//console.log(helloWorld('ngfdrxesz'));

// Exercitiul 3
/*
Creați o programă care întoarce prețul biletului la Grădina Botanică, în funcție de vârstă: copiii până la 12 ani plătesc 5 lei, după 12 - 10 lei, adulții - 20 lei, iar pensionarii (peste 65) - 15.
Chemați numai 1 funcție, numai cu anul nașterii. (ar trebui să aveți 2 funcții)
Datele: 2015, 1985, 1960, 2018
*/
let pretBilet;
const calcVarsta = function(anulNasterii) {
    return 2024 - anulNasterii;
}

const calcPretBilet = function(anulNasterii1) {
    let varsta = calcVarsta(anulNasterii1);
    if (varsta < 12) {
        pretBilet = 5;
    } else if (varsta >= 12 && varsta < 18) {
        pretBilet = 10;
    } else if (varsta >= 18 && varsta < 65) {
        pretBilet = 20;
    } else {
        pretBilet = 15;
    }
    //console.log('Pretul biletului pentru varsta de ' + varsta + ' ani este de ' + pretBilet + ' lei.');
    console.log(`Pretul biletului pentru varsta de ${varsta} ani este de ${pretBilet} lei.`)
}

calcPretBilet(2015);
calcPretBilet(985);
calcPretBilet(1957);
calcPretBilet(2018);


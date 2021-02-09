/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

*/

let vorname, alter;
vorname = prompt('Bitte name eingeben');
alter = parseInt(prompt('Bitte alter eingeben'));

console.log(vorname, alter);

if (alter <= 5){
    console.log("Hallo " + vorname + ", willst du Milch?");
    } else if (alter <=12) {
        console.log("Hallo " + vorname + ", willst du Saft oder Milch?");
    } else if (alter <=17) {   
        console.log("Hallo " + vorname + ", willst du Cola, Saft oder Milch?");
    } else {
        console.log("Hallo " + vorname + ", willst du Bier, Cola, Saft oder Milch?");
    }


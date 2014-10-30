//
// Portuguese Preterito conjuging function
//


// Entry point for preterito conjuging
function nopreterito(subject, verb) {
    if (preteritoIrregulares.hasOwnProperty(verb)) {
        return subject + " " + (preteritoIrregulares[verb])[ subjectTerminaisonIndexes[subject] ];
    }
    else {
        return subject + " " + radical(verb) + getpreteritoterminaison(subject, verb);
    }
}


var preteritoTerminaisonsGroup1 = ["ei", "aste", "ou", "amos", "aram"];

var preteritoTerminaisonsGroup2 = ["i", "este", "eu", "emos", "eram"];

var preteritoTerminaisonsGroup3 = ["i", "iste", "iu", "imos", "iram"];


var preteritoIrregulares =  {
        "dar" : ["dei", "deste", "deu", "demos", "deram"],
        "estar" : ["estive", "estiveste", "esteve", "estivemos", "estiveram"],
        "ser" : ["fui", "foste", "foi", "fomos", "foram"],
        "ir" : ["fui", "foste", "foi", "fomos", "foram"],
        "ter" : ["tive", "tiveste", "teve", "tivemos", "tiveram"],
        "vir" : ["vim", "vieste", "veio", "viemos", "vieram"],
        "ler" : ["li", "leste", "leu", "lemos", "leram"],
        "ver" : ["vi", "viste", "viu", "vimos", "viram"],
        "dizer" : ["disse", "disseste", "disse", "dissemos", "disseram"],
        "fazer" : ["fiz", "fizeste", "fez", "fizemos", "fizeram"],
        "trazer" : ["trouxe", "trouxeste", "trouxe", "trouxemos", "trouxeram"],
        "poder" : ["pude", "pudeste", "p\u00f4de", "pudemos", "puderam"],
        "saber" : ["soube", "soubeste", "soube", "soubemos", "souberam"],
        "p\u00f4r" : ["pus", "puseste", "p\u00f4s", "pusemos", "puseram"],
        "querer" : ["quis", "quiseste", "quis", "quisemos", "quiseram"],
        "sair" : ["sa\u00ed", "sa\u00edste", "saiu", "sa\u00edmos", "sa\u00edram"]
    };

function getpreteritoterminaison(subject, verb) {
    if (preteritoIrregulares.hasOwnProperty(verb)) {
        return (preteritoIrregulares[verb])[ subjectTerminaisonIndexes[subject] ];
    }
    else if (1 == getgroup(verb)) {
        return preteritoTerminaisonsGroup1[subjectTerminaisonIndexes[subject]];
    }
    else if (2 == getgroup(verb)) {
        return preteritoTerminaisonsGroup2[subjectTerminaisonIndexes[subject]];
    }
    else if (3 == getgroup(verb)) {
        return preteritoTerminaisonsGroup3[subjectTerminaisonIndexes[subject]];
    }
}




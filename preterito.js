
var preteritoTerminaisonsGroup1 = ["ei", "aste", "ou", "amos", "aram"];

var preteritoTerminaisonsGroup2 = ["i", "este", "eu", "emos", "eram"];

var preteritoTerminaisonsGroup3 = ["i", "iste", "iu", "imos", "iram"];


var preteritoIrregulares = [
        "dar",
        "estar",
        "ser",
        "ir",
        "ter",
        "vir",
        "ler",
        "ver",
        "dizer",
        "fazer",
        "trazer",
        "poder",
        "saber",
        "pôr",
        "querer",
        "sair"
    ];

function getpreteritoterminaison(subject, verb) {
    if (-1 !== preteritoIrregulares.indexOf(verb)) {
        // TODO
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


function nopreterito(subject, verb) {
    return subject + " " + radical(verb) + getpreteritoterminaison(subject, verb);
}


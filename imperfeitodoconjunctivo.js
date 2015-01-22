//
// Portugues Imperfeito do Conjunctivo conjuging function
//


function noimperfeitodoconjunctivo(subject, verb) {
    if (_(imperfeitodoconjunctivoIrregulares).has(verb)) {
        return (imperfeitodoconjunctivoIrregulares[verb])[ subjectTerminaisonIndexes[subject] ];
    }
    else {
        return radical(verb) + getimperfeitodoconjunctivoterminaison(subject, verb);
    }
}



var imperfeitodoconjunctivoIrregulares =
    {
        "dar" : ["desse", "desses", "desse", "dessemos", "dessem"],
        "estar" : ["estivesse", "estivesses", "estivesse", "estivessemos", "estivessem"],
        "ter" : ["tivesse", "tivesses", "tivesse", "tivessemos", "tivessem"],
        "ser" : ["fosse", "fosses", "fosse", "fossemos", "fossem"],
        "ir" : ["fosse", "fosses", "fosse", "fossemos", "fossem"],
        "ler" : ["lesse", "lesses", "lesse", "lessemos", "lessem"],
        "fazer" : ["fizesse", "fizesses", "fizesse", "fizessemos", "fizessem"],
        "vir" : ["viesse", "viesses", "viesse", "viessemos", "viessem"],
        "ver" : ["visse", "visses", "visse", "vissemos", "vissem"],
        "sair" : ["saisse", "saisses", "saisse", "saissemos", "saissem"],
        "pôr" : ["pusesse", "pusesses", "pusesse", "pusessemos", "pusessem"],
        "poder" : ["pudesse", "pudesses", "pudesse", "pudessemos", "pudessem"],
        "saber" : ["soubesse", "soubesses", "soubesse", "soubessemos", "soubessem"],
        "dizer" : ["disesse", "disesses", "disesse", "disessemos", "disessem"],
        "trazer" : ["trouxesse", "trouxesses", "trouxesse", "trouxessemos", "trouxessem"],
        "querer" : ["quisesse", "quisesses", "quisesse", "quisessemos", "quisessem"],
    }


var imperfeitodoconjunctivoTerminaisonsGroup1 = ["asse", "asses", "asse", "ássemos", "assem"];

var imperfeitodoconjunctivoTerminaisonsGroup2 = ["esse", "esses", "esse", "êssemos", "essem"];

var imperfeitodoconjunctivoTerminaisonsGroup3 = ["isse", "isses", "isse", "íssemos", "issem"];


function getimperfeitodoconjunctivoterminaison(subject, verb) {
    if (1 == getgroup(verb)) {
        return imperfeitodoconjunctivoTerminaisonsGroup1[subjectTerminaisonIndexes[subject]];
    }
    else if (2 == getgroup(verb)) {
        return imperfeitodoconjunctivoTerminaisonsGroup2[subjectTerminaisonIndexes[subject]];
    }
    else if (3 == getgroup(verb)) {
        return imperfeitodoconjunctivoTerminaisonsGroup3[subjectTerminaisonIndexes[subject]];
    }
}

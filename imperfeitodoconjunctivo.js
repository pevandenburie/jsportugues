//
// Portugues Imperfeito do Conjunctivo conjuging function
//


function noimperfeitodoconjunctivo(subject, verb) {
    /*if (_(presentedoconjunctivoAlteredRadical).has(verb)) {
        return presentedoconjunctivoAlteredRadical[verb] + getpresentedoconjunctivoterminaison(subject, verb);
    }
    else if (_(imperfeitodoconjunctivoIrregulares).has(verb)) {
        return (imperfeitodoconjunctivoIrregulares[verb])[ subjectTerminaisonIndexes[subject] ];
    }
    else {*/
        return radical(verb) + getimperfeitodoconjunctivoterminaison(subject, verb);
    //}
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

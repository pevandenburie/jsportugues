//
// Portugues Present do Conjunctivo conjuging function
//


function nopresentedoconjunctivo(subject, verb) {
    return radical(verb) + getpresentedoconjunctivoterminaison(subject, verb);
}


var presentedoconjunctivoTerminaisonsGroup1 = ["e", "es", "e", "emos", "em"];

var presentedoconjunctivoTerminaisonsGroup2 = ["a", "as", "a", "amos", "am"];

var presentedoconjunctivoTerminaisonsGroup3 = presentedoconjunctivoTerminaisonsGroup2;


function getpresentedoconjunctivoterminaison(subject, verb) {
    if (1 == getgroup(verb)) {
        return presentedoconjunctivoTerminaisonsGroup1[subjectTerminaisonIndexes[subject]];
    }
    else if (2 == getgroup(verb)) {
        return presentedoconjunctivoTerminaisonsGroup2[subjectTerminaisonIndexes[subject]];
    }
    else if (3 == getgroup(verb)) {
        return presentedoconjunctivoTerminaisonsGroup3[subjectTerminaisonIndexes[subject]];
    }
}
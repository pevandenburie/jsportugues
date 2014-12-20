//
// Portugues Present do Conjunctivo conjuging function
//


function nopresentedoconjunctivo(subject, verb) {
    if (_(presentedoconjunctivoAlteredRadical).has(verb)) {
        return presentedoconjunctivoAlteredRadical[verb] + getpresentedoconjunctivoterminaison(subject, verb);
    }
    else {
        return radical(verb) + getpresentedoconjunctivoterminaison(subject, verb);
    }
}


var presentedoconjunctivoAlteredRadical =
    {
        "conferir" : "confir",
        "despir" : "disp",
        "dormir" : "durm",
        "ouvir" : "ouç",
        "pedir" : "peç",
        "repetir" : "repit",
        "seguir" : "sig",
        "sentir" : "sint",
        "servir" : "sirv",
        "subir" : "sub",    // Nao entendo onde esta a alteraco...
        "vestir" : "vist"
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
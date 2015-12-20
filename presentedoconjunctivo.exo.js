//
// Portugues Presente do Conjunctivo exercise
//

var verbList = [
  "abrir",
  "beber",
  "buscar",
  "cantar",
  "correr",
  "cair",
  "descansar",
  "falar"
  ];

var verbs = _.union(_(presentedoconjunctivoAlteredRadical).keys(), _(presentedoconjunctivoIrregulares).keys(), verbList);


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomSubject() {
  var subjects = _(subjectTerminaisonIndexes).keys();
  var idx = getRandomInt(0, _.size(subjects)-1 );
  return subjects[idx];
}

function generateRandomVerb() {
  var idx = getRandomInt(0, _.size(verbs)-1 );
  return verbs[idx];
}

// Init of the question
JsPortugues.exercises.presentedoconjunctivo = {
  createQuestion: function() {

    // Select a subject and a verb, and compute the solution
    var subject = generateRandomSubject();
    var verb = generateRandomVerb();
    var solution = JsPortugues.nopresentedoconjunctivo(subject, verb);
    var solutionFullText = subject + " " + solution;

    var questionText = subject + " (" + verb + ")";
    return { 'subject': subject, 'verb': verb, 'text': questionText, 'solution': solution, 'solutionFullText': solutionFullText };
  }
};

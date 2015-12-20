//
// Portugues Imperfeito do Conjunctivo exercise
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

var verbs = _.union(_(imperfeitodoconjunctivoIrregulares).keys(), verbList);


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


var ImperfeitodoconjunctivoQuestion = function() {
  // Select a subject and a verb, and compute the solution
  this.subject = generateRandomSubject();
  this.verb = generateRandomVerb();
  this.text = this.subject + " (" + this.verb + ")";
  this.solution = JsPortugues.noimperfeitodoconjunctivo(this.subject, this.verb);
  this.solutionFullText = this.subject + " " + this.solution;
};

// Init of the question
JsPortugues.exercises.imperfeitodoconjunctivo = {
  createQuestion: function() {
    return new ImperfeitodoconjunctivoQuestion();
  }
};

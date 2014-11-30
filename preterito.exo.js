//
// Portuguese Preterito exercise
//


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomSubject() {
  var subjects = _(subjectTerminaisonIndexes).keys();
  var idx = getRandomInt(0, _.size(subjects)-1 );
  return subjects[idx];
}

function generateRandomVerb() {
  var verbs = _(preteritoIrregulares).keys();
  var idx = getRandomInt(0, _.size(verbs)-1 );
  return verbs[idx];
}

// Init of the question
function createQuestion() {
  // Select a subject and a verb, and compute the solution
  var subject = generateRandomSubject();
  var verb = generateRandomVerb();
  var solution = nopreterito(subject, verb);;

  var questionText = subject + " (" + verb + ")";
  return { 'subject': subject, 'verb': verb, 'text': questionText, 'solution': solution };
}
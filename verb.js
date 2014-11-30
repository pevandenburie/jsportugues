//
//  Generic verb functions 
//


var subjectTerminaisonIndexes = {
	"eu" : 0,
	"tu" : 1,
	"voce" : 2,
	"ele" : 2,
	"ela" : 2,
	"nos" : 3,
	"voces" : 4,
	"eles" : 4,
	"elas" : 4
}


var _subjects = _(subjectTerminaisonIndexes).keys();



var jsportugues = {
  subjects: _subjects
}

function getgroup(verb) {
	if (verb.slice(verb.length-2) === "ar") {
			return 1;
	}
	else if (verb.slice(verb.length-2) === "er") {
			return 2;
	}
	else if (verb.slice(verb.length-2) === "ir") {
			return 3;
	}
	else {
			console.log("no group !");
			return undefined;
	}
}

function radical(verb) {
	return verb.slice(0, -2);
}



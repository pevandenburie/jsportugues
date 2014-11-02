//
// Portuguese Imperfeito conjuging function
//

//
//  Generic verb functions 
//

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
	}
}

function radical(verb) {
	return verb.slice(0, -2);
}


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

//
// Imperfeito functions
//

// Entry point for imperfeito conjuging
function noimperfeito(subject, verb) {
	if (_(imperfeitoirregulares).has(verb)) {
			return subject + " " + (imperfeitoirregulares[verb])[subjectTerminaisonIndexes[subject]];
	}
	else {
			return subject + " " + radical(verb) + imperfeitoterminaison(subject, verb);
	}
}


var imperfeitoterminaisonsgroup1 = {
			"eu" : "ava",
			"tu" : "avas",
			"voce" : "ava",
			"ele" : "ava",
			"ela" : "ava",
			"nos" : "avamos",
			"voces" : "avam",
			"eles" : "avam",
			"elas" : "avam"
	}

var imperfeitoterminaisonsgroup2 = {
			"eu" : "ia",
			"tu" : "ias",
			"voce" : "ia",
			"ele" : "ia",
			"ela" : "ia",
			"nos" : "iamos",
			"voces" : "iam",
			"eles" : "iam",
			"elas" : "iam"
	}

var imperfeitoterminaisonsgroup3 = imperfeitoterminaisonsgroup2;

function imperfeitoterminaison(subject, verb) {
	if (_(imperfeitoterminaisonsgroup1).has(subject)) {
			if (1 == getgroup(verb)) {
					return imperfeitoterminaisonsgroup1[subject];
			}
			else if (2 == getgroup(verb)) {
					return imperfeitoterminaisonsgroup2[subject];
			}
			else if (3 == getgroup(verb)) {
					return imperfeitoterminaisonsgroup3[subject];
			}
	}
}

imperfeitoirregulares = {
			"ser" : ["era", "eras", "era", "éramos", "eram"],
			"ter" : ["tinha", "tinhas", "tinha", "tinhamos", "tinham"],
			"vir" : ["vinha", "vinhas", "vinha", "vinhamos", "vinham"],
			"por" : ["punha", "punhas", "punha", "punhamos", "punham"]
	}
//
// Logger element
//

function log_insert( id, isSuccess, useranswer,  solutionFullText)
{
	var logList = document.getElementById( id );

	var logEntry = document.createElement("DIV");
	if (isSuccess) {
		score.nbSuccess++;
		logEntry.setAttribute("class", "right");
		logEntry.textContent = "\"" + useranswer + "\"" + " Correto!  (" + solutionFullText + ")";
	}
	else {
		score.nbFailure++;
		logEntry.setAttribute("class", "wrong");
		logEntry.textContent = "\"" + useranswer + "\"" + " Falso!  (" + solutionFullText + ")";
	}
	logList.insertBefore(logEntry, logList.firstChild);
}

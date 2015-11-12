//
// Logger element
//


var AnswerLogItem = Backbone.Model.extend({
	urlRoot: 'log',
	defaults: {
		userAnswer: "NA",
		isSuccess: false,
		solutionFullText: "NA"
	}
});



var AnswerLogView = Backbone.View.extend({
	id: 'answerslog-view',
	className: 'log',

	template: _.template("<div><%= userAnswer %> <% if (isSuccess) { print('Correto'); } else { print('Falso'); } > (<%= solutionFullText %>)</div>"),

	render: function() {
		/*if (this.model.get('isSuccess')) {
			var html = '<div>' + this.model.get('useranswer') + ' Correto!  (' + this.model.get('solutionFullText') + ')' + '</div>';	
		}
		else  {
			var html = '<div>' + this.model.get('useranswer') + ' Falso!  (' + this.model.get('solutionFullText') + ')' + '</div>';	
		}
		this.$el.html(html);*/

		var attributes = this.model.toJSON();
		this.$el.html(this.template(attributes));
	}
});




function log_insert( id, isSuccess, userAnswer,  solutionFullText)
{
	// Create a new log entry
	var answerLogItem = new AnswerLogItem();
	answerLogItem.set({
		userAnswer: this.userAnswer, 
		isSuccess: this.isSuccess,
		solutionFullText: this.solutionFullText 
	});

	//answerLogItem.save();
	//answerLogItem.fetch();


	var answerLogView = new AnswerLogView({
		model: answerLogItem,
	});

	answerLogView.render();



	/*var logList = document.getElementById( id );

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
	logList.insertBefore(logEntry, logList.firstChild);*/
}

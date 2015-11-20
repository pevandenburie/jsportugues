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
	//id: 'answerslog-view',
	className: 'log',

	template: _.template("<div><%= userAnswer %> <% if (isSuccess) { print('Correto'); } else { print('Falso'); } %> (<%= solutionFullText %>)</div>"),

	render: function() {
		// var html;
		// if (this.model.get('isSuccess')) {
		// 	html = '<div>' + this.model.get('userAnswer') + ' Correto!  (' + this.model.get('solutionFullText') + ')' + '</div>';	
		// }
		// else  {
		// 	html = '<div>' + this.model.get('userAnswer') + ' Falso!  (' + this.model.get('solutionFullText') + ')' + '</div>';	
		// }
		// $(this.el).html(html);

		var attributes = this.model.toJSON();
		$(this.el).html(this.template(attributes));

		return this;
	}
});



var AnswerLogListView = Backbone.View.extend({
	el: $('answerslog')
})

var AnswerLogList = Backbone.Collection.extend({
	model: AnswerLogItem
})

var logList = new AnswerLogList();




function log_insert( id, isSuccess, userAnswer,  solutionFullText)
{
	// Create a new log entry
	var answerLogItem = new AnswerLogItem();
	answerLogItem.set({userAnswer: userAnswer});
	answerLogItem.set({isSuccess: isSuccess});
	answerLogItem.set({solutionFullText: solutionFullText});

	logList.add(answerLogItem);

	//answerLogItem.save();
	//answerLogItem.fetch();


	var answerLogView = new AnswerLogView({
		model: answerLogItem,
	});

	answerLogView.render();

	console.log(answerLogView.render().el);



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

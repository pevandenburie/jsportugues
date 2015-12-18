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
	className: 'log',

	template: _.template("<% if (isSuccess) { print('\<div class=\"right\"\>'); } else { print('\<div class=\"wrong\"\>'); } %>" +
		"<%= userAnswer %> " +
		"<% if (isSuccess) { print('Correto'); } else { print('Falso'); } %> " +
		"(<%= solutionFullText %>)</div>"),

	render: function() {
		var attributes = this.model.toJSON();
		$(this.el).html(this.template(attributes));

		return this;
	}
});



var AnswerLogListView = Backbone.View.extend({
	el: $('#answerslog'),

	initialize: function() {
		// 'on' does not work ???
		this.collection.bind('add', this.addOne, this);
	},

	render: function() {
		this.collection.forEach(this.addOne, this);
	},

	addOne: function(answerLogItem) {
		var answerLogView = new AnswerLogView({
			model: answerLogItem
		});

		$('#answerslog').prepend(answerLogView.render().el);
	}
});

var AnswerLogList = Backbone.Collection.extend({
	model: AnswerLogItem
});


var logList = new AnswerLogList();
var logListView = new AnswerLogListView({collection: logList});



function log_insert( id, isSuccess, userAnswer,  solutionFullText)
{
	// Create a new log entry and append it to the list.
	// The rendering will invert the order.
	var answerLogItem = new AnswerLogItem({
		userAnswer: userAnswer,
		isSuccess: isSuccess,
		solutionFullText: solutionFullText
	});
	
	logList.add(answerLogItem);

	//answerLogItem.save();
	//answerLogItem.fetch();





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

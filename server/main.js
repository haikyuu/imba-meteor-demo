
import {Meteor} from "meteor/meteor"/*$path$*/;;
import {onPageLoad} from "meteor/server-render"/*$path$*/;;
import {TasksCollection} from "/imports/api/TasksCollection"/*$path$*/;

const insertTask = function(taskText) { return TasksCollection.insert({text: taskText}); };

Meteor.startup(function() {
	
	const count = TasksCollection.find().count();
	if (count === 0) {
		
		[
			'First Task',
			'Second Task',
			'Third Task',
			'Fourth Task',
			'Fifth Task',
			'Sixth Task',
			'Seventh Task'
		].forEach(insertTask);
	};
	
	const tasks = TasksCollection.find().fetch();
	Meteor.publish('tasks',function() {
		
		return TasksCollection.find();
	});
	
	return console.log((`Greetings from $` + (module.id) + `!`));
});


onPageLoad(function(sink) {
	
	return sink.renderIntoElementById("server-render-target",(`Server time: $` + new Date));
});

import { Meteor } from "meteor/meteor";
import { onPageLoad } from "meteor/server-render";
import { TasksCollection } from "/imports/api/TasksCollection"

const insertTask = do(taskText) TasksCollection.insert { text: taskText }

Meteor.startup do
	const count = TasksCollection.find!.count!
	if count === 0
		[
			'First Task',
			'Second Task',
			'Third Task',
			'Fourth Task',
			'Fifth Task',
			'Sixth Task',
			'Seventh Task'
		].forEach(insertTask)
	
	const tasks = TasksCollection.find!.fetch!
	Meteor.publish 'tasks', do
		TasksCollection.find!

	console.log `Greetings from ${module.id}!`


onPageLoad	do(sink)
	sink.renderIntoElementById "server-render-target", `Server time: ${new Date}`

import { Meteor } from "meteor/meteor";
import { onPageLoad } from "meteor/server-render";
import { TasksCollection } from "/imports/api/TasksCollection"

const insertTask = taskText => TasksCollection.insert({ text: taskText });

Meteor.startup(async () => {
  const count = TasksCollection.find().count()
  if (count === 0) {
    [
      'First Task',
      'Second Task',
      'Third Task',
      'Fourth Task',
      'Fifth Task',
      'Sixth Task',
      'Seventh Task'
    ].forEach(insertTask)
  }
  // Code to run on server startup.
  const tasks = TasksCollection.find().fetch()
  Meteor.publish('tasks', function tasksPublication() {
    return TasksCollection.find();
  });
  console.log(`Greetings from ${module.id}!`);
});

onPageLoad(sink => {
  // Code to run on every request.
  sink.renderIntoElementById(
    "server-render-target",
    `Server time: ${new Date}`
  );
});

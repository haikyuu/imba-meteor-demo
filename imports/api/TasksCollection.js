import { Mongo } from 'meteor/mongo';
 
export const TasksCollection = new Mongo.Collection('tasks');
TasksCollection.allow({
	insert: function (userId, doc) {
		return true;
	 },
	 update: function (userId, doc, fieldNames, modifier) {
		return true;
	 },
	 remove: function (userId, doc) {
		return true;
	 }
})
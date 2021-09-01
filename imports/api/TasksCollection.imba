import { Mongo } from 'meteor/mongo';
 
export const TasksCollection = new Mongo.Collection('tasks');

TasksCollection.allow
	insert: do true
	update: do true
	remove: do true

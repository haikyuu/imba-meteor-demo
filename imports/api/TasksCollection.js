
import {Mongo} from 'meteor/mongo'/*$path$*/;;

export const TasksCollection = new Mongo.Collection('tasks');;

TasksCollection.allow(
	{insert: function() { return true; },
	update: function() { return true; },
	remove: function() { return true; }}
);

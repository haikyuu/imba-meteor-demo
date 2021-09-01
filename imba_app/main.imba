import { TasksCollection as Task } from '/imports/api/TasksCollection';
import { Tracker } from 'meteor/tracker'
import {Meteor} from 'meteor/meteor'
import Meteorite from './meteorite'

global css html
	ff:sans

let tasks = []
let newTodo = ""
let hideCompleted = false
# let computation

const hideCompletedFilter = { done: { $ne: true } };

tag app
	def render
		const meteorite = new Meteorite("tasks")
		meteorite.track do
			tasks = Task.find(
				hideCompleted ? hideCompletedFilter : {}, { sort: { createdAt: -1 } }
			).fetch!
		<self>
			<ul>
				for task in tasks
					<li[list-style:none]> 
						<input type="checkbox" bind=task.done @click=Task.update(task._id, {$set: {done: !task.done}})>
						<span> task.text
						<button @click=Task.remove(task._id)> "Delete"
			<div>
				<input bind=newTodo placeholder="New Task">
				<button @click=Task.insert({text:newTodo})> "ok"
			
			<section>
				# <input type="checkbox" bind=hideCompleted @click=computation.invalidate> 
				<input type="checkbox" bind=hideCompleted> 
				<span> "Hide Completed"
imba.mount <app>
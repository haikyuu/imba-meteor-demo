import { Tracker } from 'meteor/tracker'
import {Meteor} from 'meteor/meteor'

export default class Meteorite
	computation
	def constructor ...models\string[]
		models.forEach do(model) subscribe(model)

	def subscribe model\string
		Meteor.subscribe model

	def track callback\Function, options\{onError?: Function} = {}
		computation = Tracker.autorun(&, options) do(computation)
			callback computation
			imba.commit!

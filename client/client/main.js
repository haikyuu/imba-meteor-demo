function iter$__(a){ let v; return a ? ((v=a.toIterable) ? v.call(a) : a) : []; };
var εself = Symbol(), εul = Symbol(), ε = Symbol(), εinput = Symbol(), auφ = Symbol(), avφ = Symbol(), εspan = Symbol(), εi = Symbol(), ε2 = Symbol(), εbutton = Symbol(), axφ = Symbol(), εinput2 = Symbol(), ayφ = Symbol(), εinput3 = Symbol(), azφ = Symbol(), τapp, ϲτ = (imba_renderContext.context||{}), εapp = Symbol(), ιapp, Δapp;
const ΨΨup = Symbol.for('##up');
import {use_dom_bind as imba_use_dom_bind, use_events as imba_use_events, styles as imba_styles, ImbaElement as imba_ImbaElement, commit as imba_commit, createComponent as imba_createComponent, createElement as imba_createElement, createIndexedFragment as imba_createIndexedFragment, defineTag as imba_defineTag, renderContext as imba_renderContext, mount as imba_mount} from 'imba'/*$path$*/;
(imba_use_dom_bind(),imba_use_events());

import {TasksCollection as Task} from '/imports/api/TasksCollection'/*$path$*/;;
import {Tracker} from 'meteor/tracker'/*$path$*/;
import {Meteor} from 'meteor/meteor'/*$path$*/;

let tasks = [];
let newTodo = "";
let hideCompleted = false;
// let computation

const hideCompletedFilter = {done: {$ne: true}};;

class AppComponent extends imba_ImbaElement {
	
	render(){
		var τself, ιself, Δself, φ = this._ns_ || '', τul, τ, κ, ρ, τli, ιli, Δli, τinput, ιinput, Δinput, υinput, τspan, υspan, τbutton, ιbutton, Δbutton, υbutton, τdiv, τinput2, ιinput2, Δinput2, τbutton2, τsection, τinput3, ιinput3, Δinput3, τspan2;
		
		Meteor.subscribe('tasks');
		Tracker.autorun(function() {
			
			tasks = Task.find(
				hideCompleted ? hideCompletedFilter : {},{sort: {createdAt: -1}}
			).fetch();
			return imba_commit();
		});
		τself=this;
		τself.open$();
		(ιself=Δself=1,τself[εself] === 1) || (ιself=Δself=0,τself[εself]=1);
		(τul = τself[εul]) || (τself[εul]=τul=imba_createElement('ul',τself,`${φ}`,null));
		(τ = τself[ε]) || (τself[ε]=τ=imba_createIndexedFragment(384,τul));
		κ = 0;
		ρ=τ.$;
		for (let iφ = 0, itemsφ = iter$__(tasks), lenφ = itemsφ.length; iφ < lenφ; iφ++) {
			let task = itemsφ[iφ];
			(ιli=Δli=1,τli=ρ[κ]) || (ιli=Δli=0,ρ[κ]=τli=imba_createElement('li',τ,`qh114j-ah ${φ}`,null));
			ιli||(τli[ΨΨup]=τ);
			(ιinput=Δinput=1,τinput=τli[εinput]) || (ιinput=Δinput=0,τli[εinput]=τinput=imba_createElement('input',τli,`${φ}`,null));
			ιinput || (τinput.type="checkbox");
			υinput=τli[auφ] || (τli[auφ]=τinput.bind$('data',[null,'done']));
			υinput[0]=task;
			υinput = τli[avφ] || (τli[avφ]={$_: [function(e,$,_2) {
				return Task.update(_2._id,{$set: {done: !_2.done}});
			},null]});
			υinput.$_[1]=task;
			ιinput || τinput.on$(`click`,υinput,this);
			ιinput || !τinput.setup || τinput.setup(Δinput);
			τinput.end$(Δinput);
			(τspan = τli[εspan]) || (τli[εspan]=τspan=imba_createElement('span',τli,`${φ}`,null));
			(υspan=task.text,(υspan===τli[ε2]&&ιli) || (τli[εi] = τspan.insert$(τli[ε2]=υspan,384,τli[εi])));
			(ιbutton=Δbutton=1,τbutton=τli[εbutton]) || (ιbutton=Δbutton=0,τli[εbutton]=τbutton=imba_createElement('button',τli,`${φ}`,"Delete"));
			υbutton = τli[axφ] || (τli[axφ]={$_: [function(e,$,_2) {
				return Task.remove(_2._id);
			},null]});
			υbutton.$_[1]=task;
			ιbutton || τbutton.on$(`click`,υbutton,this);
			κ++;
		};τ.end$(κ);
		ιself || (τdiv=imba_createElement('div',τself,`${φ}`,null));
		(ιinput2=Δinput2=1,τinput2=τself[εinput2]) || (ιinput2=Δinput2=0,τself[εinput2]=τinput2=imba_createElement('input',τdiv,`${φ}`,null));
		ιinput2 || τinput2.bind$('data',{get:function(){ return newTodo },set:function(v$){ newTodo = v$ }});
		ιinput2 || (τinput2.placeholder="New Task");
		ιinput2 || !τinput2.setup || τinput2.setup(Δinput2);
		τinput2.end$(Δinput2);
		ιself || (τbutton2=imba_createElement('button',τdiv,`${φ}`,"ok"));
		ιself || (τbutton2.on$(`click`,{$_: [function(e,$) {
			return Task.insert({text: newTodo});
		}]},this));
		ιself || (τsection=imba_createElement('section',τself,`${φ}`,null));
		(ιinput3=Δinput3=1,τinput3=τself[εinput3]) || (ιinput3=Δinput3=0,τself[εinput3]=τinput3=imba_createElement('input',τsection,`${φ}`,null));
		ιinput3 || (τinput3.type="checkbox");
		ιinput3 || τinput3.bind$('data',{get:function(){ return hideCompleted },set:function(v$){ hideCompleted = v$ }});
		ιinput3 || !τinput3.setup || τinput3.setup(Δinput3);
		τinput3.end$(Δinput3);
		ιself || (τspan2=imba_createElement('span',τsection,`${φ}`,"Hide Completed"));
		τself.close$(Δself);
		return τself;
	}
}; imba_defineTag('app',AppComponent,{});
imba_mount(((ιapp=Δapp=1,τapp=ϲτ[εapp]) || (ιapp=Δapp=0,ϲτ[εapp]=τapp=imba_createComponent('app',null,null,null)),
ιapp || (τapp[ΨΨup]=ϲτ._),
ιapp || !τapp.setup || τapp.setup(Δapp),
τapp.end$(Δapp),
τapp));

imba_styles.register('qh114j',"html {font-family: var(--font-sans,system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\");}\n\n.qh114j-ah:not(#_):not(#_) {list-style: none;}\n\napp { display:block; }\n\n");
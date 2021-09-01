import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		taskItem: [
			{ id: 1, task: "Task 1", completed: false },
			{ id: 2, task: "Task 2", completed: false },
			{ id: 3, task: "Task 3", completed: false },
		],
		buttonStatus: [
			{ id: 1, title: "All", completed: true },
			{ id: 2, title: "Active", completed: false },
			{ id: 3, title: "Completed", completed: false },
		]
	},
	getters: {
		allTask(state) {
			return state.taskItem
		},
		footerButtons(state) {
			return state.buttonStatus
		},
		tasksLength(state) {
			return state.taskItem.length
		},
		tasksCompleted(state) {
			return state.taskItem.filter(task => task.completed === true).length
		}
	},
	mutations: {
		add_task(state, task) {
			state.taskItem.unshift(task);
		},
		delete_task(state, id) {
			state.taskItem = state.taskItem.filter(task => task.id !== id)
		},
		change_task(state, completed) {
			console.log(completed)
		},
	},
	actions: {
		addTask({ commit }, task) {
			commit("add_task", task);
		},
		deleteTask({ commit }, id) {
			commit("delete_task", id);
		},
		changeTask({ commit }, completed) {
			commit("change_task", completed)
		}
	},
})

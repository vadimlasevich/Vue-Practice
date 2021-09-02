import { v4 as uuidv4 } from 'uuid'
export default {
	state: {
		taskItem: [
			{ id: uuidv4(), task: "Task 1", completed: false },
			{ id: uuidv4(), task: "Task 2", completed: false },
			{ id: uuidv4(), task: "Task 3", completed: false },
		],
		buttonStatus: [
			{ id: uuidv4(), title: "All", completed: true },
			{ id: uuidv4(), title: "Active", completed: false },
			{ id: uuidv4(), title: "Completed", completed: false },
		],
		title: "All"
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
		},
		showTasks(state) {
			switch (state.title) {
				case 'Active':
					return state.taskItem.filter(todo => !todo.completed);
				case 'Completed':
					return state.taskItem.filter(todo => todo.completed);
				default:
					return state.taskItem;
			}
		}
	},
	mutations: {
		addTask(state, newTask) {
			if (newTask) {
				const task = { task: newTask, id: uuidv4(), completed: false }
				state.taskItem.unshift(task);
			}
			localStorage.setItem('taskItems', JSON.stringify(state.taskItem))
		},
		deleteTask(state, id) {
			state.taskItem = state.taskItem.filter(task => task.id !== id)
			localStorage.setItem('taskItems', JSON.stringify(state.taskItem))
		},
		changeTask(state, id) {
			state.taskItem = state.taskItem.map(task =>
				task.id === id ? { ...task, completed: !task.completed } : task
			);
			localStorage.setItem('taskItems', JSON.stringify(state.taskItem))
		},
		changeBtnName(state, title) {
			state.title = title;
		},
		changeBtnStatus(state, id) {
			state.buttonStatus = state.buttonStatus.map((btn) =>
				btn.id === id ? { ...btn, completed: btn.completed } : btn
			);
		},
		storage(state) {
			const item = localStorage.getItem('taskItems');
			state.taskItem = JSON.parse(item);
		}
	},
	actions: {
		STORAGE({ commit }) {
			commit('storage')
		}
	},
}
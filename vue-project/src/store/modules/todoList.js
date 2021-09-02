export default {
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
				const task = { task: newTask, id: state.taskItem.length + 1, completed: false }
				state.taskItem.unshift(task);
			}
		},
		deleteTask(state, id) {
			state.taskItem = state.taskItem.filter(task => task.id !== id)
		},
		changeTask(state, id) {
			state.taskItem = state.taskItem.map(task =>
				task.id === id ? { ...task, completed: !task.completed } : task
			);
		},
		changeBtnName(state, title) {
			state.title = title;
		},
		changeBtnStatus(state, id) {
			state.buttonStatus = state.buttonStatus.map((btn) =>
				btn.id === id ? { ...btn, completed: btn.completed } : btn
			);
		},
	},
	actions: {},
}
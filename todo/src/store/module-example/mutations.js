import Vue from 'vue'
export const updateTask = (state , newTask) => {
    Object.assign(state.tasks[newTask.id], newTask.updates)
}
export const deleteTask = (state , id) => {
    console.log(id)
    Vue.delete(state.tasks, id)
}


export const updateTask = ( {commit}, payload) => {
    commit('updateTask' , payload)
}

export const deleteTask = ( {commit}, id) => {
    console.log('delete')
    commit('deleteTask' , id)
}

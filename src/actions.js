export const ADD_TODO = 'ADD_TODO'
export const DELETE_TODO = 'DELETE_TODO'

export const addTodo = (text) => {
 return {
    type: ADD_TODO,
    text
 }
}

export const deleteTodo = (id) => {
    return {
       type: DELETE_TODO,
       id
    }
   }
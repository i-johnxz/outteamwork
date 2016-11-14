import { handleActions } from 'redux-actions'
import { TodoState } from '../../constants/models'

const todoReducers = handleActions({
  CREATE_TODO: (state) => {
    state.todos.push(state.todo)
  },
  DELETE_TODO: (state, { payload }) => (
    state.todos.splice(payload.index, 1)
  ),
  CHANGE_TEXT: (state, { payload }) => (
    state.todo = payload
  )
}, TodoState)

export default todoReducers


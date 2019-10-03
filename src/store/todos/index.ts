import { Actions } from '../actions'
import * as types from './types'

interface Todo {
  id: string
  done: boolean
  task: string
}

interface State {
  todos: Todo[]
}

export function initialState(injects?: State): State {
  return {
    todos: [],
    ...injects,
  }
}

export function reducer(state = initialState(), action: Actions): State {
  switch (action.type) {
    case types.addTodo:
      return { ...state, todos: [...state.todos, action.payload] }
    default:
      return state
  }
}

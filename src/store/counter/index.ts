import { Actions } from "../actions";
import * as types from './types'


interface State {
  count: number;
}

export function initialState(injects?: State): State {
  return {
    count: 0,
    ...injects
  };
}

export function reducer(state = initialState(), action: Actions): State {
  switch (action.type) {
    case types.increment:
      return { ...state, count: state.count + 1 };
    case types.decrement:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}

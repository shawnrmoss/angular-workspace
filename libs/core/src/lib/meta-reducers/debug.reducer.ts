import { ActionReducer } from '@ngrx/store';

import { CoreState } from '../store';

export function debug(
  reducer: ActionReducer<CoreState>
): ActionReducer<CoreState> {
  return function(state, action) {
    const newState = reducer(state, action);
    console.log(`[DEBUG] action: ${action.type}`, {
      payload: (<any>action).payload,
      oldState: state,
      newState
    });
    return newState;
  };
}

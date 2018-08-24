import { ActionReducer, INIT, UPDATE } from '@ngrx/store';

import { LocalStorageService } from '../services/local-storage.service';
import { CoreState } from '../store';

export function initStateFromLocalStorage(
  reducer: ActionReducer<CoreState>
): ActionReducer<CoreState> {
  return function(state, action) {
    const newState = reducer(state, action);
    if ([INIT.toString(), UPDATE.toString()].includes(action.type)) {
      return { ...newState, ...LocalStorageService.loadInitialState() };
    }
    return newState;
  };
}

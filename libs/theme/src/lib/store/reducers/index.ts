import { ActionReducerMap } from '@ngrx/store';

// From Feature
import { reducer, ShellState, initialShellState } from './shell.reducer';
export * from './shell.reducer';

export interface ThemeState {
  shell: ShellState;
}

export const initialThemeState: ThemeState = {
  shell: initialShellState
};

export const themeReducer: ActionReducerMap<ThemeState> = {
  shell: reducer
};

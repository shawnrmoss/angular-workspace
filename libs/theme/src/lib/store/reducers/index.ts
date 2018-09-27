import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

// From Feature
import { shellReducer, ShellState, initialShellState } from './shell.reducer';
export * from './shell.reducer';

export interface ThemeState {
  shell: ShellState;
}

export const initialThemeState: ThemeState = {
  shell: initialShellState
};

export const themeReducer: ActionReducerMap<any> = {
  shell: shellReducer
};

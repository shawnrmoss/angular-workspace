import { ActionReducerMap } from '@ngrx/store';

// From Feature
import { shellReducer, ShellState } from './shell.reducer';
export * from './shell.reducer';

export const initialThemeState: ThemeState = {
  shell: null
};

export const selectorTheme = state => <ThemeState>(state.theme || {
    shell: null
  });

export const themeReducer: ActionReducerMap<any> = {
  shell: shellReducer
};

export interface ThemeState {
  shell: ShellState;
}

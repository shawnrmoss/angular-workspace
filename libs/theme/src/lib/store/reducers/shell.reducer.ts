import { ShellActions, ShellActionTypes } from '../actions';

export const initialShellState: ShellState = {
  logo: '',
  navigation: null,
  leftSideNavOpen: false,
  rightSideNavOpen: false,
  loading: false
};

export function shellReducer(
  state: ShellState = initialShellState,
  action: ShellActions
): ShellState {
  switch (action.type) {
    case ShellActionTypes.SET_LOGO:
      return { ...state, logo: action.payload.logo };

    case ShellActionTypes.SET_NAVIGATION:
      return { ...state, navigation: action.payload.navigation };

    case ShellActionTypes.TOGGLE_LEFT_SIDENAV:
      return { ...state, leftSideNavOpen: action.payload.toggle };

    case ShellActionTypes.TOGGLE_RIGHT_SIDENAV:
      return { ...state, rightSideNavOpen: action.payload.toggle };

    case ShellActionTypes.TOGGLE_LOADING:
      return { ...state, loading: action.payload.toggle };

    default:
      return state;
  }
}

export interface ShellState {
  logo: string;
  navigation: string[];
  leftSideNavOpen: boolean;
  rightSideNavOpen: boolean;
  loading: boolean;
}

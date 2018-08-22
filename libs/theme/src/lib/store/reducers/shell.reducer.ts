import { ShellActions, ShellActionTypes } from '../actions';

export const initialShellState: ShellState = {
  logo: '',
  navigation: null,
  navigationSideNavOpen: false,
  calendarSideNavOpen: false,
  loading: false
};

export function shellReducer(
  state: ShellState = initialShellState,
  action: ShellActions
): ShellState {
  switch (action.type) {
    case ShellActionTypes.TOGGLE_NAV_SIDENAV:
      return { ...state, navigationSideNavOpen: action.payload.toggle };

    case ShellActionTypes.TOGGLE_CALENDAR_SIDENAV:
      return { ...state, calendarSideNavOpen: action.payload.toggle };

    case ShellActionTypes.TOGGLE_LOADING:
      return { ...state, loading: action.payload.toggle };

    case ShellActionTypes.SET_LOGO:
      return { ...state, logo: action.payload.logo };

    case ShellActionTypes.SET_NAVIGATION:
      return { ...state, navigation: action.payload.navigation };

    default:
      return state;
  }
}

export interface ShellState {
  logo: string;
  navigation: string[];
  navigationSideNavOpen: boolean;
  calendarSideNavOpen: boolean;
  loading: boolean;
}

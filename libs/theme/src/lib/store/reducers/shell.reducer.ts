import { ShellActions, ShellActionTypes } from '../actions';
import { Theme } from '../../models';

export interface ShellState {
  logo: string;
  navigation: string[];
  leftSideNavOpen: boolean;
  rightSideNavOpen: boolean;
  loading: boolean;
  themes: Theme[];
  selectedTheme: string;
}

export const initialShellState: ShellState = {
  logo: '',
  navigation: [],
  leftSideNavOpen: false,
  rightSideNavOpen: false,
  loading: false,
  themes: [
    <Theme>{
      label: 'Default',
      value: 'default-theme'
    },
    <Theme>{
      label: 'Light',
      value: 'light-theme'
    },
    <Theme>{
      label: 'Dark',
      value: 'dark-theme'
    }
  ],
  selectedTheme: 'default-theme'
};

export function reducer(state: ShellState = initialShellState, action: ShellActions): ShellState {
  switch (action.type) {
    case ShellActionTypes.SetLogo: {
      return {
        ...state,
        logo: action.payload.logo
      };
    }

    case ShellActionTypes.SetNavigation: {
      return {
        ...state,
        navigation: action.payload.navigation
      };
    }

    case ShellActionTypes.ToggleLeftSidenav: {
      return {
        ...state,
        leftSideNavOpen: action.payload.toggle
      };
    }

    case ShellActionTypes.ToggleRightSidenav: {
      return {
        ...state,
        rightSideNavOpen: action.payload.toggle
      };
    }

    case ShellActionTypes.ToggleLoading: {
      return {
        ...state,
        loading: action.payload
      };
    }

    case ShellActionTypes.SetTheme: {
      return {
        ...state,
        selectedTheme: action.payload
      };
    }

    default:
      return state;
  }
}

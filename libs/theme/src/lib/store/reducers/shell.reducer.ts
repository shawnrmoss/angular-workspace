import { ShellActions, ShellActionTypes } from '../actions';
import { Theme } from '../../models';

export const initialShellState: ShellState = {
  logo: '',
  socialMediaLogos: [],
  navigation: null,
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
  ]
};

export function shellReducer(
  state: ShellState = initialShellState,
  action: ShellActions
): ShellState {
  switch (action.type) {
    case ShellActionTypes.SET_LOGO:
      return { ...state, logo: action.payload.logo };

    case ShellActionTypes.SET_SOCIAL_MEDIA_LOGOS:
      return { ...state, socialMediaLogos: action.payload.logos };

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
  socialMediaLogos: string[];
  navigation: string[];
  leftSideNavOpen: boolean;
  rightSideNavOpen: boolean;
  loading: boolean;
  themes: Theme[];
}

import { ThemeAction, ThemeActionTypes } from '../actions';
import { Theme } from '../../models';

export interface ThemeState {
  loading: boolean; // is the app loading
  loaded: boolean; // has the Theme been loaded
  logo: string;
  navigation: string[];
  leftSideNavOpen: boolean;
  rightSideNavOpen: boolean;
  themes: Theme[];
  selectedTheme: string;
}

export const initialState: ThemeState = {
  loading: false,
  loaded: false,
  logo: '',
  navigation: [],
  leftSideNavOpen: false,
  rightSideNavOpen: false,
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

export function themeReducer(state: ThemeState = initialState, action: ThemeAction): ThemeState {
  switch (action.type) {
    case ThemeActionTypes.SelectLogo: {
      return {
        ...state,
        logo: action.logo
      };
    }

    case ThemeActionTypes.SelectNavigation: {
      return {
        ...state,
        navigation: action.navigation
      };
    }

    case ThemeActionTypes.ToggleLeftSidenav: {
      return {
        ...state,
        leftSideNavOpen: !state.leftSideNavOpen
      };
    }

    case ThemeActionTypes.ToggleRightSidenav: {
      return {
        ...state,
        rightSideNavOpen: !state.rightSideNavOpen
      };
    }

    case ThemeActionTypes.ToggleLoading: {
      return {
        ...state,
        loading: !state.loading
      };
    }

    case ThemeActionTypes.SelectTheme: {
      return {
        ...state,
        selectedTheme: action.theme
      };
    }
  }
  return state;
}

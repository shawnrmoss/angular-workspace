import { ShellState } from '../reducers';

export const selectorLayout = state => <ShellState>(state.layout || {
    logo: '',
    navigation: null,
    navigationSideNavOpen: false,
    calendarSideNavOpen: false,
    loading: false
  });

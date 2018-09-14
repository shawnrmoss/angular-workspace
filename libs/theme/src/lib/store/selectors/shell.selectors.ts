import { ShellState } from '../reducers';

export const selectorLayout = state => <ShellState>(state.layout || {
  logo: '',
  socialMediaLogos: [],
  navigation: null,
  navigationSideNavOpen: false,
  calendarSideNavOpen: false,
  loading: false
});

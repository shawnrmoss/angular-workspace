import { ThemeLoaded } from '../actions/theme.actions';
import { ThemeState, Entity, initialState, themeReducer } from './theme.reducer';

describe('Theme Reducer', () => {
  const getThemeId = it => it['id'];
  let createTheme;

  beforeEach(() => {
    createTheme = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('valid Theme actions ', () => {
    it('should return set the list of known Theme', () => {
      const themes = [createTheme('PRODUCT-AAA'), createTheme('PRODUCT-zzz')];
      const action = new ThemeLoaded(themes);
      const result: ThemeState = themeReducer(initialState, action);
      const selId: string = getThemeId(result.list[1]);

      expect(result.loaded).toBe(true);
      expect(result.list.length).toBe(2);
      expect(selId).toBe('PRODUCT-zzz');
    });
  });

  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;
      const result = themeReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});

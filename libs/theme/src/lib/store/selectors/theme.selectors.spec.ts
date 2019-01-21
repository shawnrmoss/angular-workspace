import { Entity, ThemeState } from './theme.reducer';
import { themeQuery } from './theme.selectors';

describe('Theme Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getThemeId = it => it['id'];

  let storeState;

  beforeEach(() => {
    const createTheme = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
    storeState = {
      theme: {
        list: [createTheme('PRODUCT-AAA'), createTheme('PRODUCT-BBB'), createTheme('PRODUCT-CCC')],
        selectedId: 'PRODUCT-BBB',
        error: ERROR_MSG,
        loaded: true
      }
    };
  });

  describe('Theme Selectors', () => {
    it('getAllTheme() should return the list of Theme', () => {
      const results = themeQuery.getAllTheme(storeState);
      const selId = getThemeId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelectedTheme() should return the selected Entity', () => {
      const result = themeQuery.getSelectedTheme(storeState);
      const selId = getThemeId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getLoaded() should return the current 'loaded' status", () => {
      const result = themeQuery.getLoaded(storeState);

      expect(result).toBe(true);
    });

    it("getError() should return the current 'error' storeState", () => {
      const result = themeQuery.getError(storeState);

      expect(result).toBe(ERROR_MSG);
    });
  });
});

import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/nx/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/nx';

import { ThemeEffects } from '../effects/theme.effects';
import { ThemeFacade } from './theme.facade';

import { themeQuery } from '../selectors/theme.selectors';
import { LoadTheme, ThemeLoaded } from '../actions/theme.actions';
import { ThemeState, Entity, initialState, themeReducer } from '../theme.reducer';

interface TestSchema {
  theme: ThemeState;
}

describe('ThemeFacade', () => {
  let facade: ThemeFacade;
  let store: Store<TestSchema>;
  let createTheme;

  beforeEach(() => {
    createTheme = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature('theme', themeReducer, { initialState }),
          EffectsModule.forFeature([ThemeEffects])
        ],
        providers: [ThemeFacade]
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [NxModule.forRoot(), StoreModule.forRoot({}), EffectsModule.forRoot([]), CustomFeatureModule]
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.get(Store);
      facade = TestBed.get(ThemeFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async done => {
      try {
        let list = await readFirst(facade.allTheme$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.loadAll();

        list = await readFirst(facade.allTheme$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `ThemeLoaded` to manually submit list for state management
     */
    it('allTheme$ should return the loaded list; and loaded flag == true', async done => {
      try {
        let list = await readFirst(facade.allTheme$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        store.dispatch(new ThemeLoaded([createTheme('AAA'), createTheme('BBB')]));

        list = await readFirst(facade.allTheme$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(2);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});

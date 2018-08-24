// Angular
import { Injectable } from '@angular/core';

// Vendor
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

// Core and Shared
import { LocalStorageService } from '@angular-workspace/core';

// From Feature
import { SETTINGS_KEY, SettingsActionTypes, SettingsPersist } from '../actions';

@Injectable()
export class SettingsEffects {
  constructor(
    private actions$: Actions<Action>,
    private localStorageService: LocalStorageService
  ) {}

  @Effect({ dispatch: false })
  persistSettings(): Observable<Action> {
    return this.actions$
      .ofType(SettingsActionTypes.PERSIST)
      .pipe(
        tap((action: SettingsPersist) =>
          this.localStorageService.setItem(
            SETTINGS_KEY,
            action.payload.settings
          )
        )
      );
  }
}

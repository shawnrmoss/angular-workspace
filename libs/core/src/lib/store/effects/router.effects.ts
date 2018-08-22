import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { Effect, Actions } from '@ngrx/effects';
import { RouterActionTypes, Go } from '../actions/router.actions';

import { tap, map } from 'rxjs/operators';

@Injectable()
export class RouterEffects {
  constructor(
    private actions$: Actions,
    private router: Router,
    private location: Location
  ) {}

  @Effect({ dispatch: false })
  navigate$ = this.actions$.ofType(RouterActionTypes.GO).pipe(
    map((action: Go) => action.payload),
    tap(({ path, query: queryParams, extras }) => {
      this.router.navigate(path, { queryParams, ...extras });
    })
  );

  @Effect({ dispatch: false })
  navigateBack$ = this.actions$
    .ofType(RouterActionTypes.BACK)
    .pipe(tap(() => this.location.back()));

  @Effect({ dispatch: false })
  navigateForward$ = this.actions$
    .ofType(RouterActionTypes.FORWARD)
    .pipe(tap(() => this.location.forward()));
}

import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Actions, Effect } from '@ngrx/effects';
import { map, tap } from 'rxjs/operators';

import { Go, RouterActionTypes } from '../actions/router.actions';

@Injectable()
export class RouterEffects {
  constructor(private actions$: Actions, private router: Router, private location: Location) {}

  @Effect({ dispatch: false })
  go$ = this.actions$.ofType(RouterActionTypes.Go).pipe(
    map((action: Go) => action.payload),
    tap(({ path, query: queryParams, extras }) => {
      this.router.navigate(path, { queryParams, ...extras });
    })
  );

  @Effect({ dispatch: false })
  back$ = this.actions$.ofType(RouterActionTypes.Back).pipe(tap(() => this.location.back()));

  @Effect({ dispatch: false })
  forward$ = this.actions$.ofType(RouterActionTypes.Forward).pipe(tap(() => this.location.forward()));
}

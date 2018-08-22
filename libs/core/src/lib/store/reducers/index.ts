import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ActionReducerMap } from '@ngrx/store';
import {
  routerReducer,
  RouterReducerState,
  RouterStateSerializer
} from '@ngrx/router-store';

import { RouterStateUrl } from '../../models/router.model';

export interface AppState {
  router: RouterReducerState<RouterStateUrl>;
}

export const coreReducers: ActionReducerMap<AppState> = {
  router: routerReducer
};

export class CustomSerializer implements RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    const { url } = routerState;
    const { queryParams } = routerState.root;

    let state: ActivatedRouteSnapshot = routerState.root;
    while (state.firstChild) {
      state = state.firstChild;
    }
    const { params } = state;

    return { url, queryParams, params };
  }
}

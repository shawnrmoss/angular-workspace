import { createFeatureSelector } from '@ngrx/store';
import { RouterReducerState } from '@ngrx/router-store';

import { RouterStateUrl } from '../../models/router.model';

export const getRouterState = createFeatureSelector<RouterReducerState<RouterStateUrl>>('routerReducer');

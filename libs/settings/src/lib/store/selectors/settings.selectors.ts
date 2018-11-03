// Vendor
import { createFeatureSelector, createSelector } from '@ngrx/store';

// From Feature
import { SettingsState, initialSettingsState } from '../reducers';

// Selectors
export const getSettingsState = state => <SettingsState>(state || initialSettingsState);

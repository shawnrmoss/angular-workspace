// Angular
import { Component, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material';

// Vendors
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

// From Core and Shared
import { Theme, getThemes, ThemeState, SetTheme } from '@angular-workspace/theme';

// From Feature
import { Settings } from '../../models';

@Component({
  selector: 'angular-workspace-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  settings$: Observable<Settings>;
  themes$: Observable<Theme[]>;

  selectedTheme$: Observable<string>;

  constructor(private store: Store<ThemeState>) {}

  ngOnInit() {
    this.themes$ = this.store.select(getThemes);
  }

  onThemeSelect(themeToSelect: MatSelectChange) {
    this.store.dispatch(new SetTheme(themeToSelect.value));
  }
}

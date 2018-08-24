// Angular
import { Component, OnInit } from '@angular/core';

// Vendors
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

// From Feature
import { Theme } from '../../models';
import {
  SettingsState,
  getThemes,
  getSelectedTheme,
  ChangeTheme
} from '../../store';

@Component({
  selector: 'angular-workspace-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  themes$: Observable<Theme[]>;
  selectedTheme: Observable<Theme>;

  constructor(private settingsStore: Store<SettingsState>) {}

  ngOnInit() {
    this.themes$ = this.settingsStore.select(getThemes);
    this.selectedTheme = this.settingsStore.select(getSelectedTheme);
  }

  themeSelect(themeToSelect: Theme) {
    this.settingsStore.dispatch(new ChangeTheme(themeToSelect));
  }
}

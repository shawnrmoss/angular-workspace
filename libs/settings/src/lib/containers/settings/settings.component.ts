// Angular
import { Component, OnInit } from '@angular/core';

// Vendors
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

// From Core and Shared
import { Theme, getThemes, ThemeState } from '@angular-workspace/theme';

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

  onThemeSelect(themeToSelect: string) {
    console.log(themeToSelect);
    //his.settingsStore.dispatch(new ChangeTheme(themeToSelect));
  }
}

// Angular
import { Component, OnInit } from '@angular/core';

// Vendors
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

// From Core and Shared
import { Theme, getThemes } from '@angular-workspace/theme';

// From Feature
import { SettingsState, getSelectedTheme, ChangeTheme } from '../../store';

@Component({
  selector: 'angular-workspace-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  themes$: Observable<Theme[]>;
  selectedTheme$: Observable<Theme>;

  constructor(private settingsStore: Store<SettingsState>) {}

  ngOnInit() {
    this.selectedTheme$ = this.settingsStore.select(getSelectedTheme);
    this.themes$ = this.settingsStore.select(getThemes);

    this.settingsStore.select(getThemes).subscribe(themes => {
      console.log(themes);
    });
  }

  themeSelect(themeToSelect: Theme) {
    this.settingsStore.dispatch(new ChangeTheme(themeToSelect));
  }
}

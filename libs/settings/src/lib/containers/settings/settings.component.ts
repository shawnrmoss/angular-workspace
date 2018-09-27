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
  selectedTheme$: Observable<string>;

  constructor(private settingsStore: Store<SettingsState>) {}

  ngOnInit() {
    this.selectedTheme$ = this.settingsStore.select(getSelectedTheme);
    this.settingsStore.select(getSelectedTheme).subscribe(theme => {
      console.log(theme);
    });
    this.themes$ = this.settingsStore.select(getThemes);
  }

  themeSelect(themeToSelect: string) {
    //console.log(themeToSelect);
    this.settingsStore.dispatch(new ChangeTheme(themeToSelect));
  }
}

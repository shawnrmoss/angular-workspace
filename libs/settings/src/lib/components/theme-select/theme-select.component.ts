// Angular
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

// From Feature
import { Theme } from '../../models';

@Component({
  selector: 'angular-workspace-theme-select',
  templateUrl: './theme-select.component.html',
  styleUrls: ['./theme-select.component.scss']
})
export class ThemeSelectComponent implements OnInit {
  @Input() selectedTheme: Theme;
  @Input() themes: Theme[];
  @Output() selectTheme = new EventEmitter<Theme>();

  constructor() {}

  ngOnInit() {}

  onThemeSelect(themeToSelect: Theme) {
    this.selectTheme.emit(themeToSelect);
  }
}

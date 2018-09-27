// Angular
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

// From Core and Shared
import { Theme } from '@angular-workspace/theme';

@Component({
  selector: 'angular-workspace-theme-select',
  templateUrl: './theme-select.component.html',
  styleUrls: ['./theme-select.component.scss']
})
export class ThemeSelectComponent implements OnInit {
  @Input() selectedTheme: string;
  @Input() themes: Theme[];
  @Output() selectTheme = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  onThemeSelect(themeToSelect: string) {
    this.selectTheme.emit(themeToSelect);
  }
}

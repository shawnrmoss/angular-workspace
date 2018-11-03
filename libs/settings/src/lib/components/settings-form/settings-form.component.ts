import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  OnChanges,
  SimpleChanges,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

// From Feature
import { Theme } from '@angular-workspace/theme';

@Component({
  selector: 'angular-workspace-settings-form',
  templateUrl: './settings-form.component.html',
  styleUrls: ['./settings-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsFormComponent implements OnInit, OnChanges {
  @Input() selectedTheme: string;
  @Input() themes: Theme[];
  @Output() selectTheme = new EventEmitter<string>();

  form = this.fb.group({
    selectedTheme: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['selectedTheme'] && this.selectedTheme) {
      this.form.get('selectedTheme').value(this.selectedTheme);
    }
  }

  onThemeSelect(themeToSelect: string) {
    this.selectTheme.emit(themeToSelect);
  }
}

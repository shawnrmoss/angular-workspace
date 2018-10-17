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

// Core && Shared
import { AwForm } from '@angular-workspace/shared';

// From Feature
import { Settings } from '../../models';
import { Theme } from '@angular-workspace/theme';

@Component({
  selector: 'angular-workspace-settings-form',
  templateUrl: './settings-form.component.html',
  styleUrls: ['./settings-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsFormComponent extends AwForm implements OnInit, OnChanges {
  @Input() settings: Settings;
  @Input() themes: Theme[];

  @Output() selectTheme = new EventEmitter<string>();

  form = this.fb.group({
    theme: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) {
    super();
  }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['settings'] && this.settings) {
      this.form.patchValue(this.settings);
    }
  }

  onThemeSelect(themeToSelect: string) {
    this.selectTheme.emit(themeToSelect);
  }
}

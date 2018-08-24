import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Core and Shared
import { SharedModule } from '@angular-workspace/shared';
import { ThemeModule } from '@angular-workspace/theme';

// From Feature
import { ThemeSelectComponent } from './components';
import { SettingsComponent } from './containers';

@NgModule({
  imports: [CommonModule, SharedModule, ThemeModule],
  declarations: [SettingsComponent, ThemeSelectComponent]
})
export class SettingsModule {}

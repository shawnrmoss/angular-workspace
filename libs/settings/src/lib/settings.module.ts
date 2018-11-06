// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Vendor
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// Core and Shared
import { SharedModule } from '@angular-workspace/shared';
import { ThemeModule } from '@angular-workspace/theme';

// From Feature
import { SettingsFormComponent } from './components';
import { SettingsComponent } from './containers';
import { SettingsRoutingModule } from './settings.routing';

@NgModule({
  imports: [
    // Angular
    CommonModule,
    // Core and Shared
    SharedModule,
    ThemeModule,

    // Custom
    SettingsRoutingModule
  ],
  declarations: [SettingsComponent, SettingsFormComponent]
})
export class SettingsModule {}

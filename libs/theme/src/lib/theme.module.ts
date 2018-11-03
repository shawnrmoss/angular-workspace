import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Vendor
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// Core & Shared
import { SharedModule } from '@angular-workspace/shared';

// From Feature
import { themeReducer } from './store';
import { AppBarComponent, FooterComponent } from './components';
import { ShellComponent } from './containers';

@NgModule({
  imports: [
    // Angular
    RouterModule,

    // Core & Shared
    SharedModule,

    // Vendor
    StoreModule.forFeature('ThemeStore', themeReducer),
    EffectsModule.forFeature([])
  ],
  declarations: [
    // Containers
    ShellComponent,

    // Components
    AppBarComponent,
    FooterComponent
  ],
  exports: [
    // Containers
    ShellComponent,

    // Components
    AppBarComponent,
    FooterComponent
  ]
})
export class ThemeModule {}

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Vendor
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// Core & Shared
import { SharedModule } from '@angular-workspace/shared';

// From Feature
import { themeEffects, themeReducer } from './store';
import { AppBarComponent, FooterComponent } from './components';
import { ShellComponent, DetailsComponent } from './containers';

@NgModule({
  imports: [
    // Angular
    RouterModule,

    // Core & Shared
    SharedModule,

    // Vendor
    StoreModule.forFeature('theme', themeReducer),
    EffectsModule.forFeature(themeEffects)
  ],
  declarations: [
    // Containers
    ShellComponent,
    DetailsComponent,

    // Components
    AppBarComponent,
    FooterComponent
  ],
  exports: [
    // Containers
    ShellComponent,
    DetailsComponent,

    // Components
    AppBarComponent,
    FooterComponent
  ]
})
export class ThemeModule {}

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Vendor
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// Core & Shared
import { SharedModule } from '@angular-workspace/shared';

// From Feature
import { themeEffects, themeReducer } from './store';
import { ToolbarComponent, FooterComponent } from './components';
import { ShellComponent } from './containers';
import { AppBarComponent } from './components/app-bar/app-bar.component';

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
  declarations: [ShellComponent, ToolbarComponent, FooterComponent, AppBarComponent],
  exports: [ShellComponent, ToolbarComponent]
})
export class ThemeModule {}

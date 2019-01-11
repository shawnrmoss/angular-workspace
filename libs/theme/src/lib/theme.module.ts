import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Vendor
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// Core & Shared
import { SharedModule } from '@angular-workspace/shared';

// From Feature
import { AppBarComponent, CardComponent, FooterComponent, LoadingStatusComponent } from './components';
import { ShellComponent } from './containers';
import { initialState as themeInitialState, themeReducer, ThemeFacade } from './store';

@NgModule({
  imports: [
    // Angular
    RouterModule,

    // Core & Shared
    SharedModule,

    // Vendor
    StoreModule.forFeature('ThemeStore', themeReducer, { initialState: themeInitialState }),
    EffectsModule.forFeature([])
  ],
  declarations: [
    // Containers
    ShellComponent,

    // Components
    AppBarComponent,
    FooterComponent,
    LoadingStatusComponent,
    CardComponent
  ],
  exports: [
    // Containers
    ShellComponent,

    // Components
    AppBarComponent,
    FooterComponent,
    LoadingStatusComponent,
    CardComponent
  ],
  providers: [ThemeFacade]
})
export class ThemeModule {}

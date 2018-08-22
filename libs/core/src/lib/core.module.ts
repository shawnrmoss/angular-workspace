import {
  NgModule,
  Optional,
  SkipSelf,
  ModuleWithProviders
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';

// Vendor
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// From Feature
import { coreReducers, coreEffects } from './store';
import { LocalStorageService, TitleService } from './services';
import { AnimationsService } from './animations';

@NgModule({
  imports: [
    // Angular
    CommonModule,
    HttpClientModule,

    // Ngrx
    StoreModule.forFeature('core', coreReducers),
    EffectsModule.forFeature(coreEffects)
  ]
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [LocalStorageService, AnimationsService, TitleService]
    };
  }
}

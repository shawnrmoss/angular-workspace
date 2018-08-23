// Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Vendors
import { NxModule } from '@nrwl/nx';
import { StoreModule, MetaReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  StoreRouterConnectingModule,
  RouterStateSerializer
} from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { storeFreeze } from 'ngrx-store-freeze';

// Root & Shared Modules
import {
  CoreModule,
  coreReducers,
  coreEffects,
  CustomSerializer,
  debug,
  initStateFromLocalStorage,
  LocalStorageService
} from '@angular-workspace/core';
import { ThemeModule } from '@angular-workspace/theme';
import { SharedModule } from '@angular-workspace/shared';

// Feature Modules

// App
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';

import { environment } from '../environments/environment';

export const metaReducers: MetaReducer<any>[] = !environment.production
  ? [storeFreeze, initStateFromLocalStorage]
  : [initStateFromLocalStorage];

if (!environment.production) {
  metaReducers.unshift(debug);
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    // Angular
    BrowserModule,
    BrowserAnimationsModule,

    // Nx
    NxModule.forRoot(),
    StoreModule.forRoot(coreReducers, {
      metaReducers
    }),
    EffectsModule.forRoot(coreEffects),
    StoreRouterConnectingModule,
    environment ? StoreDevtoolsModule.instrument() : [],

    // Core and Shared
    CoreModule.forRoot(),
    ThemeModule,
    SharedModule,

    // App
    AppRoutingModule
  ],
  providers: [
    { provide: RouterStateSerializer, useClass: CustomSerializer },
    LocalStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

// Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Vendors
import { NxModule } from '@nrwl/nx';
import { StoreModule, MetaReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// Root & Shared Modules
import { CustomSerializer } from '@angular-workspace/common';
import { CoreModule } from '@angular-workspace/core';
import { SharedModule } from '@angular-workspace/shared';
import { ThemeModule } from '@angular-workspace/theme';
import { SettingsModule } from '@angular-workspace/settings';

// App
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';

import { environment } from '../environments/environment';
import { effects, reducers } from './store';

@NgModule({
  declarations: [AppComponent],
  imports: [
    // Angular
    BrowserModule,
    BrowserAnimationsModule,

    // Nx
    NxModule.forRoot(),
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects),
    StoreRouterConnectingModule,
    environment ? StoreDevtoolsModule.instrument() : [],

    // Core and Shared
    CoreModule.forRoot(),
    SharedModule,
    ThemeModule,
    SettingsModule,

    // App
    AppRoutingModule
  ],
  providers: [{ provide: RouterStateSerializer, useClass: CustomSerializer }],
  bootstrap: [AppComponent]
})
export class AppModule {}

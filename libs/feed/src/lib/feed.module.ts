// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Core and Shared
import { SharedModule } from '@angular-workspace/shared';
import { ThemeModule } from '@angular-workspace/theme';

// From Feature
import { DetailsComponent, FeedComponent, ListComponent } from './containers';
import { FeedRoutingModule } from './feed.routing';

@NgModule({
  imports: [
    // Angular
    CommonModule,
    // Core and Shared
    SharedModule,
    ThemeModule,
    // From Feature
    FeedRoutingModule
  ],
  declarations: [FeedComponent, ListComponent, DetailsComponent]
})
export class FeedModule {}

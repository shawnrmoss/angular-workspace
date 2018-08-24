// Angular
import { Component, OnInit } from '@angular/core';

// Vendors

// Core and Shared
import { routeAnimations } from '@angular-workspace/core';

@Component({
  selector: 'angular-workspace-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
  animations: [routeAnimations]
})
export class FeedComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

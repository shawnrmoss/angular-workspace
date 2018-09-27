import { Component, OnInit, HostBinding, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { OverlayContainer } from '@angular/cdk/overlay';
import { ActivationEnd, Router } from '@angular/router';

// Vendors
import { Store, select } from '@ngrx/store';
import { Subject, Observable } from 'rxjs';
import { takeUntil, filter } from 'rxjs/operators';

// Features
import {
  SetLogo,
  SetNavigation,
  SetSocialMediaLogos,
  Theme
} from '@angular-workspace/theme';
import { getSelectedTheme } from '@angular-workspace/settings';

// App
import { environment as env } from '../environments/environment';

@Component({
  selector: 'angular-workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private unsubscribe$: Subject<void> = new Subject<void>();
  @HostBinding('class') componentCssClass;

  logo = require('../assets/logo.png');
  githubLogo = require('../assets/github.png');
  mediumLogo = require('../assets/medium.png');
  steemitLogo = require('../assets/steemit.png');
  twitterLogo = require('../assets/twitter.png');

  navigation = [
    { link: '/home', label: 'Home' },
    { link: '/settings', label: 'Settings' }
  ];

  constructor(
    public overlayContainer: OverlayContainer,
    private store: Store<any>,
    private router: Router,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    // Set the theme for the app
    this.subscribeToSettings();

    // Set the page title
    this.subscribeToRouterEvents();

    // TODO SM - Put these into a guard that protects the top level route.
    this.store.dispatch(new SetLogo({ logo: this.logo }));
    this.store.dispatch(
      new SetSocialMediaLogos({
        logos: [
          this.githubLogo,
          this.mediumLogo,
          this.steemitLogo,
          this.twitterLogo
        ]
      })
    );
    this.store.dispatch(new SetNavigation({ navigation: this.navigation }));
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private subscribeToSettings() {
    this.store
      .pipe(
        select(getSelectedTheme),
        takeUntil(this.unsubscribe$)
      )
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(selectedTheme => {
        this.setTheme(selectedTheme);
      });
  }

  private setTheme(selectedTheme: string) {
    const effectiveTheme = 'default-theme';
    this.componentCssClass = effectiveTheme;
    const classList = this.overlayContainer.getContainerElement().classList;
    const toRemove = Array.from(classList).filter((item: string) =>
      item.includes('-theme')
    );
    if (toRemove.length) {
      classList.remove(...toRemove);
    }
    classList.add(effectiveTheme);
  }

  private subscribeToRouterEvents() {
    this.router.events
      .pipe(
        takeUntil(this.unsubscribe$),
        filter(event => event instanceof ActivationEnd)
      )
      .subscribe((event: ActivationEnd) => {
        let lastChild = event.snapshot;
        while (lastChild.children.length) {
          lastChild = lastChild.children[0];
        }
        const { title } = lastChild.data;
        this.titleService.setTitle(
          title ? `${title} - ${env.appName}` : env.appName
        );
      });
  }
}

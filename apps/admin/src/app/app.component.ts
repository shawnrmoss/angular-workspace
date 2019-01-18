import { Component, OnInit, HostBinding, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { OverlayContainer } from '@angular/cdk/overlay';
import { ActivationEnd, Router } from '@angular/router';

// Vendors
import { Subject } from 'rxjs';
import { takeUntil, filter } from 'rxjs/operators';

// Features
import { ThemeFacade } from '@angular-workspace/theme';

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
  navigation = [{ link: '/home', label: 'Home' }, { link: '/settings', label: 'Settings' }];

  constructor(
    public overlayContainer: OverlayContainer,
    private themeFacade: ThemeFacade,
    private router: Router,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    // Set the theme for the app
    this.subscribeToSettings();

    // Set the page title
    this.subscribeToRouterEvents();

    // TODO SM - Put these into a guard that protects the top level route.
    this.themeFacade.selectLogo(this.logo);
    this.themeFacade.selectNavigation(this.navigation);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private subscribeToSettings() {
    this.themeFacade.selectedTheme$.subscribe(theme => {
      this.setTheme(theme);
    });
  }

  private setTheme(selectedTheme: string) {
    this.componentCssClass = selectedTheme;
    const classList = this.overlayContainer.getContainerElement().classList;
    const toRemove = Array.from(classList).filter((item: string) => item.includes('-theme'));
    if (toRemove.length) {
      classList.remove(...toRemove);
    }
    classList.add(selectedTheme);
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
        this.titleService.setTitle(title ? `${title} - ${env.appName}` : env.appName);
      });
  }
}

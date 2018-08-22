import { Title } from '@angular/platform-browser';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable()
export class TitleService {
  appName = 'Angular Workspace';
  constructor(private title: Title) {}

  setTitle(snapshot: ActivatedRouteSnapshot) {
    let lastChild = snapshot;
    while (lastChild.children.length) {
      lastChild = lastChild.children[0];
    }
    const { title } = lastChild.data;

    if (title) {
      this.title.setTitle(`${title} - ${this.appName}`);
    } else {
      this.title.setTitle(this.appName);
    }
  }
}

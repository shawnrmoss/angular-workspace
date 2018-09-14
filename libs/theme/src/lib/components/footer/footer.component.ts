import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'angular-workspace-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input('github') github: any;
  @Input('medium') medium: any;
  @Input('steemit') steemit: any;
  @Input('twitter') twitter: any;

  constructor() { }

  ngOnInit() {
  }

}

import { async, TestBed } from '@angular/core/testing';
import { FeedModule } from './feed.module';

describe('FeedModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FeedModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FeedModule).toBeDefined();
  });
});

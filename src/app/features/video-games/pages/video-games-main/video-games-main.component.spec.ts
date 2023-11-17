import {ComponentFixture, TestBed} from '@angular/core/testing';

import {VideoGamesMainComponent} from './video-games-main.component';

describe('VideoGamesMainComponent', () => {
  let component: VideoGamesMainComponent;
  let fixture: ComponentFixture<VideoGamesMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VideoGamesMainComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(VideoGamesMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

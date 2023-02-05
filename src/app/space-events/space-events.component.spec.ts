import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceEventsComponent } from './space-events.component';

describe('SpaceEventsComponent', () => {
  let component: SpaceEventsComponent;
  let fixture: ComponentFixture<SpaceEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpaceEventsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpaceEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

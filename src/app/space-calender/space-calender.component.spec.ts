import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceCalenderComponent } from './space-calender.component';

describe('SpaceCalenderComponent', () => {
  let component: SpaceCalenderComponent;
  let fixture: ComponentFixture<SpaceCalenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpaceCalenderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpaceCalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

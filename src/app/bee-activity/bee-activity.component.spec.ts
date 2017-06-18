import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeeActivityComponent } from './bee-activity.component';

describe('BeeActivityComponent', () => {
  let component: BeeActivityComponent;
  let fixture: ComponentFixture<BeeActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeeActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeeActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

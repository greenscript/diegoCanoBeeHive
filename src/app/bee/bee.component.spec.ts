import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeeComponent } from './bee.component';

describe('BeeComponent', () => {
  let component: BeeComponent;
  let fixture: ComponentFixture<BeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

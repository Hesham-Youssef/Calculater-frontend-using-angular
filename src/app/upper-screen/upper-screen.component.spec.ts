import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpperScreenComponent } from './upper-screen.component';

describe('UpperScreenComponent', () => {
  let component: UpperScreenComponent;
  let fixture: ComponentFixture<UpperScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpperScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpperScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

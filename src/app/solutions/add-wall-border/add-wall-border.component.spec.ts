import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWallBorderComponent } from './add-wall-border.component';

describe('AddWallBorderComponent', () => {
  let component: AddWallBorderComponent;
  let fixture: ComponentFixture<AddWallBorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddWallBorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWallBorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

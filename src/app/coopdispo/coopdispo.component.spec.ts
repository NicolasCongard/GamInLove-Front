import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoopdispoComponent } from './coopdispo.component';

describe('CoopdispoComponent', () => {
  let component: CoopdispoComponent;
  let fixture: ComponentFixture<CoopdispoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoopdispoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoopdispoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CSeccion3Component } from './c-seccion3.component';

describe('CSeccion3Component', () => {
  let component: CSeccion3Component;
  let fixture: ComponentFixture<CSeccion3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CSeccion3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CSeccion3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

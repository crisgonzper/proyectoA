import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CSeccion2Component } from './c-seccion2.component';

describe('CSeccion2Component', () => {
  let component: CSeccion2Component;
  let fixture: ComponentFixture<CSeccion2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CSeccion2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CSeccion2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

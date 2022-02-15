import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoPrComponent } from './hijo-pr.component';

describe('HijoPrComponent', () => {
  let component: HijoPrComponent;
  let fixture: ComponentFixture<HijoPrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HijoPrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HijoPrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

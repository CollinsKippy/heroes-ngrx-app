import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroToggleButtonComponent } from './hero-toggle-button.component';

describe('HeroToggleButtonComponent', () => {
  let component: HeroToggleButtonComponent;
  let fixture: ComponentFixture<HeroToggleButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HeroToggleButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroToggleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

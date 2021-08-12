import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversionInfoComponent } from './conversion-info.component';

describe('ConversionInfoComponent', () => {
  let component: ConversionInfoComponent;
  let fixture: ComponentFixture<ConversionInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConversionInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversionInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

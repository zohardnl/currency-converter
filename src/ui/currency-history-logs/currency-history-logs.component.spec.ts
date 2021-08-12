import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyHistoryLogsComponent } from './currency-history-logs.component';

describe('CurrencyHistoryLogsComponent', () => {
  let component: CurrencyHistoryLogsComponent;
  let fixture: ComponentFixture<CurrencyHistoryLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyHistoryLogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyHistoryLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

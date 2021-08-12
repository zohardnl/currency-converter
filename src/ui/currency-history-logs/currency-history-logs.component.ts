import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-currency-history-logs',
  templateUrl: './currency-history-logs.component.html',
  styleUrls: ['./currency-history-logs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CurrencyHistoryLogsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

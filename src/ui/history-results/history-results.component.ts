import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {CurrencyConverterService} from "../../core/services/currency-converter.service";

@Component({
  selector: 'app-history-results',
  templateUrl: './history-results.component.html',
  styleUrls: ['./history-results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HistoryResultsComponent implements OnInit {
  conversionHistory: string[];

  constructor(private converterService: CurrencyConverterService) {
  }

  ngOnInit(): void {
    this.conversionHistory = this.converterService.conversionHistory;
  }

  trackByIndex(index: number, item: string) {
    return index;
  }
}

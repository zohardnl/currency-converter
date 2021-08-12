import {Component, ChangeDetectionStrategy} from '@angular/core';
import {Tab} from "../../core/models";

@Component({
  selector: 'app-currency-dashboard',
  templateUrl: './currency-dashboard.component.html',
  styleUrls: ['./currency-dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CurrencyDashboardComponent {
  tabs: Tab[] = [
    {
      name: 'Currency Converter',
      routePath: 'converter'
    },
    {
      name: 'History',
      routePath: 'history'
    }
  ];

  constructor() {
  }

  trackByIndex(index: number, item: Tab) {
    return index;
  }

}

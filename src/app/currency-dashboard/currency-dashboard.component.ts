import {Component, ChangeDetectionStrategy} from '@angular/core';
import {Tabs} from "../../core/models";

@Component({
  selector: 'app-currency-dashboard',
  templateUrl: './currency-dashboard.component.html',
  styleUrls: ['./currency-dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CurrencyDashboardComponent {
  tabs: Tabs[] = [
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

  trackByFunc(index: number, item: Record<string, any>) {
    return index;
  }

}

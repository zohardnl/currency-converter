import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {CurrencyConverterComponent} from "./currency-converter/currency-converter.component";
import {CurrencyDashboardComponent} from "./currency-dashboard.component";

const routes: Routes = [
  {
    path: '',
    component: CurrencyDashboardComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'converter'
      },
      {
        path: 'converter',
        component: CurrencyConverterComponent,
      },
      {
        path: 'history',
        loadChildren: () => import('../../ui/currency-history-logs/currency-history-logs.module').then(m => m.CurrencyHistoryLogsModule)
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CurrencyDashboardRoutingModule {
}

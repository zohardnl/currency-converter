import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {CurrencyHistoryLogsComponent} from "./currency-history-logs.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: CurrencyHistoryLogsComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CurrencyHistoryLogsRoutingModule {
}

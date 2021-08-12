import {NgModule} from '@angular/core';
import {CurrencyHistoryLogsComponent} from "./currency-history-logs.component";
import {CurrencyHistoryLogsRoutingModule} from "./currency-history-logs-routing.module";


@NgModule({
  declarations: [CurrencyHistoryLogsComponent],
  imports:[CurrencyHistoryLogsRoutingModule],
  exports: [CurrencyHistoryLogsComponent]
})
export class CurrencyHistoryLogsModule {
}

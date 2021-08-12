import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CurrencyHistoryLogsComponent} from "./currency-history-logs.component";


@NgModule({
  declarations: [CurrencyHistoryLogsComponent],
  imports: [
    CommonModule
  ],
  exports: [CurrencyHistoryLogsComponent]
})
export class CurrencyHistoryLogsModule {
}

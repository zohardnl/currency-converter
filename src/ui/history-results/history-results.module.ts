import {NgModule} from '@angular/core';
import {HistoryResultsComponent} from "./history-results.component";
import {HistoryResultsRoutingModule} from "./history-results-routing.module";
import {FlexModule} from "@angular/flex-layout";
import {ConversionInfoModule} from "../conversion-info/conversion-info.module";
import {CommonModule} from "@angular/common";


@NgModule({
  declarations: [HistoryResultsComponent],
  imports: [HistoryResultsRoutingModule, FlexModule, ConversionInfoModule, CommonModule]
})
export class HistoryResultsModule {
}

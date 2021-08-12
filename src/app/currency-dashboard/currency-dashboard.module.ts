import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CurrencyDashboardRoutingModule} from "./currency-dashboard-routing.module";
import {CurrencyConverterComponent} from './currency-converter/currency-converter.component';
import {FlexModule} from "@angular/flex-layout";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {CurrencyDashboardComponent} from "./currency-dashboard.component";
import {CurrencyConverterService} from "../../core/services/currency-converter.service";
import {ConversionInfoModule} from "../../ui/conversion-info/conversion-info.module";

@NgModule({
  declarations: [
    CurrencyConverterComponent,
    CurrencyDashboardComponent
  ],
  imports: [
    CommonModule,
    FlexModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    ConversionInfoModule,
    CurrencyDashboardRoutingModule
  ],
  providers: [CurrencyConverterService]
})
export class CurrencyDashboardModule {
}

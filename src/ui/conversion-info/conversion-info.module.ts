import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ConversionInfoComponent} from "./conversion-info.component";


@NgModule({
  declarations: [ConversionInfoComponent],
  imports: [CommonModule],
  exports: [ConversionInfoComponent]
})
export class ConversionInfoModule {
}

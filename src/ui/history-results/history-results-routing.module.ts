import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HistoryResultsComponent} from "./history-results.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HistoryResultsComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class HistoryResultsRoutingModule {
}

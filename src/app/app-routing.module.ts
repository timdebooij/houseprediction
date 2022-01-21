import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomescreenComponent } from './homescreen/homescreen.component';
import { PredictionComponent} from './prediction/prediction.component';
import { PredictionComponentTwo } from './predictiontwo/predictiontwo.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
  {path: 'prediction', component: PredictionComponent},
  {path: 'app', component: AppComponent},
  {path: 'homescreen', component: HomescreenComponent},
  {path: 'predictiontwo/:quality/:livar/:garsp/:garar', component: PredictionComponentTwo},
  {path: 'result/:quality/:livar/:garsp/:garar/:base/:firstfl/:build/:bath/:bid', component: ResultComponent},
  {path: '', redirectTo: '/homescreen', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

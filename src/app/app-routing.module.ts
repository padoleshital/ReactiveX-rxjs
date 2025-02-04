import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromisesComponent } from './promises/promises.component'; 
import { MapComponent } from './map/map.component';
import { FilterComponent } from './filter/filter.component';
import { FromComponent } from './from/from.component';
import { AppComponent } from './app.component';
import { ObservablesComponent } from './observables/observables.component';



const routes: Routes = [
  {
    path:'',
    redirectTo:"/promise",
    pathMatch:"full",
    
  },
  {
    path: 'promise',
    component: PromisesComponent,
  },
  {
    path: 'map',
    component: MapComponent
  },
  {
    path: 'filter',
    component:FilterComponent
  },
  {
    path: 'plunk',
    component:FilterComponent
  },
  {
    path: 'from',
    component:FromComponent
  },
  {
    path:'observable',
    component:ObservablesComponent

  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

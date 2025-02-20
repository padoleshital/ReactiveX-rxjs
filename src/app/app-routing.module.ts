import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromisesComponent } from './promises/promises.component'; 
import { MapComponent } from './observables/map/map.component';
// import { FilterComponent } from './filter/filter.component';
// import { FromComponent } from './from/from.component';
import { AppComponent } from './app.component';
import { ObservablesComponent } from './observables/observables.component';

import { ListComponent } from './observables/list/list.component';
import { FromEventComponent } from './observables/from-event/from-event.component';
import { IntervalComponent } from './observables/interval/interval.component';
import { OffromComponent } from './observables/offrom/offrom.component';
import { ToArrayComponent } from './observables/to-array/to-array.component';
import { CustomObservableComponent } from './observables/custom-observable/custom-observable.component';
import { PluckComponent } from './observables/pluck/pluck.component';
import { FilterComponent } from './observables/filter/filter.component';
import { TapComponent } from './observables/tap/tap.component';
import { take } from 'rxjs';
import { TakeComponent } from './take/take.component';
const routes: Routes = [
  {
    path:'',
    redirectTo:"promise",
    pathMatch:"full",    
  },
  {
    path: 'promise',
    component: PromisesComponent   
  },
  {
    path:'observable',
    component:ObservablesComponent,
    children:[
      {
        path:'',
        component:ListComponent
      },
      {
        path: 'fromEvent',
        component:FromEventComponent
      },
      {
        path: 'of-from',
        component:OffromComponent
      },
      {
        path: 'map',
        component: MapComponent
      },  
      {
        path:'interval',
        component:IntervalComponent
      },   
      {
        path: 'to-array',
        component: ToArrayComponent
      },
      {
        path: 'custom-observable',
        component: CustomObservableComponent
      },
      {
        path:'pluck',
        component:PluckComponent
      },
      {
        path:'filter',
        component:FilterComponent
      },
      {
        path:'tap',
        component:TapComponent
      },
      {
        path:'take',
        component:TakeComponent
      }
    ]
  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

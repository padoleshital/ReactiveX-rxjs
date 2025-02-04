import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from 'src/shared/header/header.component';
import { FooterComponent } from 'src/shared/footer/footer.component';
import { PromisesComponent } from './promises/promises.component';
import { MapComponent } from './map/map.component';
import { FilterComponent } from './filter/filter.component';
import { PlunkComponent } from './plunk/plunk.component';
import { FromComponent } from './from/from.component';
import { ObservablesComponent } from './observables/observables.component';




@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    PromisesComponent,
    MapComponent,
    FilterComponent,
    PlunkComponent,
    FromComponent,
    ObservablesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

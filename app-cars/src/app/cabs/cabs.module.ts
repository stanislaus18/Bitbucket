import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppServiceModule } from '../services/app-cars-module';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';
import { AppCabsRoutingModule } from './app-cabs-routing.module';

import { AppCabsMapsComponent } from './app-cabs-maps/app-cabs-maps.component';
import { CabDashboardComponent } from './cab-dashboard/cab-dashboard.component';
import { CabListComponent } from './cab-list/cab-list.component';

import { SearchpipePipe } from './../pipes/searchpipe.pipe';
import { CabDirectionsComponent } from './cab-directions/cab-directions.component';

@NgModule({
  imports: [
    CommonModule,
    AppServiceModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA_4dFSZkVyJzQLph5Q78aS2tzHX0Kpdc4'
    }),
    AgmDirectionModule,
    AppCabsRoutingModule
  ],
  declarations: [AppCabsMapsComponent, CabDashboardComponent, CabListComponent, SearchpipePipe, CabDirectionsComponent]
})
export class CabsModule { }

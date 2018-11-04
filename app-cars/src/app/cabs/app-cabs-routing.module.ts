import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppCabsMapsComponent } from './app-cabs-maps/app-cabs-maps.component';
import { CabListComponent } from './cab-list/cab-list.component';
import { CabDashboardComponent } from './cab-dashboard/cab-dashboard.component';
import { CabDirectionsComponent } from './cab-directions/cab-directions.component';

const routes: Routes = [
  { 
    path: 'cabs-on-map',
    component: AppCabsMapsComponent    
  },
  {
    path: 'search-cabs',
    component: CabListComponent
  },
  {
    path: 'cab-directions',
    component: CabDirectionsComponent
  },
  {
    path: 'cab-dashboard',
    component:CabDashboardComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class AppCabsRoutingModule { }

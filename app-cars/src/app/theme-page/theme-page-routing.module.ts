import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThemeComponent } from './theme/theme.component';

const routes: Routes = [
  { 
    path: 'welcome',
    component: ThemeComponent    
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})

export class ThemePageRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeComponent } from './theme/theme.component';
import { ThemePageRoutingModule } from './theme-page-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ThemePageRoutingModule
  ],
  declarations: [ ThemeComponent ]
})
export class ThemePageModule { }

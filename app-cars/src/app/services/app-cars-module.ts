import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { LocationService } from './app-cars-services';

@NgModule({
  declarations: [],
  imports: [HttpClientModule, HttpClientJsonpModule],
  providers: [LocationService]  
})
export class AppServiceModule { }

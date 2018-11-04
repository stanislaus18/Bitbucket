import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppCabsRoutingModule } from './cabs/app-cabs-routing.module';
import { CabsModule } from './cabs/cabs.module';
import { ThemePageRoutingModule } from './theme-page/theme-page-routing.module';
import { ThemePageModule } from './theme-page/theme-page.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AppCabsRoutingModule,
    CabsModule,
    ThemePageRoutingModule,
    ThemePageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

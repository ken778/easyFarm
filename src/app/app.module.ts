import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './pages/landing/landing.component';
import { FeaturesComponent } from './pages/features/features.component';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    FeaturesComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    MatButtonModule,
    MatGridListModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } 

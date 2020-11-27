import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LinechartsComponent } from './linecharts/linecharts.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { ImageserviceService} from './imageservice.service';
@NgModule({
  declarations: [
    AppComponent,
    LinechartsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleChartsModule.forRoot(),

  ],
  providers:  [ImageserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

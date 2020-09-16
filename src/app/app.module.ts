import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FlexLayoutModule } from '@angular/flex-layout'

import { AppComponent } from './app.component'
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { CitySearchComponent } from './city-search/city-search.component'


@NgModule({
  declarations: [AppComponent, CurrentWeatherComponent, CitySearchComponent],
  imports: [FormsModule, ReactiveFormsModule, BrowserModule, HttpClientModule, BrowserAnimationsModule, FlexLayoutModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

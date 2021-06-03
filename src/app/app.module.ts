import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { MoviesShowcaseComponent } from './components/movies-showcase/movies-showcase.component'

@NgModule({
  declarations: [
    AppComponent,
    MoviesShowcaseComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

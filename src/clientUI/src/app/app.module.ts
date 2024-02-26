import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { APP_INITIALIZER } from '@angular/core';
import { AppComponent } from './app.component';
import { AppConfigService } from './config/appconfigservice';
import { initializeSettings } from './config/app-init';


const routes: Routes = [
  // your routes here
];

@NgModule({
  declarations: [
    AppComponent
    // other components here
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AppConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeSettings,
      deps: [AppConfigService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
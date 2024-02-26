import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APP_INITIALIZER } from '@angular/core';
import { AppConfigService } from './config/appconfigservice';
import { initializeSettings } from './config/app-init';


// export const routes: Routes = [];

const routes: Routes = [
    // your routes here
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [
      AppConfigService,
      {
        provide: APP_INITIALIZER,
        useFactory: initializeSettings,
        deps: [AppConfigService],
        multi: true
      }
    ]
  })

  export class AppRoutingModule { }

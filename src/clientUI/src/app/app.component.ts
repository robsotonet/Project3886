import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterOutlet } from '@angular/router';

import { AppConfigService } from './config/appconfigservice';



@Component({
  selector: 'app-root',
  // standalone: true,
  // imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  magicWord! : string;
  title! : string;

  constructor(private appConfigService: AppConfigService) { }
    
  
  ngOnInit() : void {
    this.magicWord = this.appConfigService.getConfig()?.magicWord;
    this.title = 'clientUI';
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AppConfigService {
  private config: any;

  constructor(private http: HttpClient) { }

  loadConfig(): Observable<any> {
    return this.http.get('/assets/configuration/config.json');
  }

  getConfig(): any {
    return this.config;
  }

  setConfig(config: any): void {
    this.config = config;
  }
}
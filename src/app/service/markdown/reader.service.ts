import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReaderService {

  constructor(private http: HttpClient) { }

  public getMarkdown() {
    return this.http.get('assets/md/data.md', { responseType: 'text' });
  }

  public getDynamicLogo() {
    return this.http.get('assets/IN-dynamic.svg', { responseType: 'text' });
  }
}

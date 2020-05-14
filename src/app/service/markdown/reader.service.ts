import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReaderService {

  constructor(private http: HttpClient) { }

  public getMarkdown() {
    return this.http.get('assets/md/data.md', { responseType: 'text'});
  }
}

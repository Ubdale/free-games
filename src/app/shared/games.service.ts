import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  private apiUrl = 'https://Free-To-Play-Games.proxy-production.allthingsdev.co/api/games?category=shooter';

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    const headers = new HttpHeaders({
      'x-apihub-key': 'V0Mqb2eE9pgtWOt7JZNMTEFBopyE6Gg3KwxgAUCDI7gfMgaIGI',
      'x-apihub-host': 'Free-To-Play-Games.allthingsdev.co',
      'x-apihub-endpoint': '94c2bfbe-d3a2-4e43-8fd1-06c455188267'
    });

    return this.http.get(this.apiUrl, { headers });
  }
}

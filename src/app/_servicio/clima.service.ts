import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  key = 'd1f14c66381d7988edfbeb98fb26f0cc';

  constructor(private http: HttpClient) { }

  clima(ciudad: string): Observable<any>{
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&mode=json&units=metric&appid=${this.key}`);
  }
}

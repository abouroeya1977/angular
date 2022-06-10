import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../modules/material/user';

const API = 'http://localhost:8080/articles'

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  getAll(): Observable<any> {
    return this.http.get<any>(API)
  }

  getIntervals(page: string, size: string): Observable<any> {
    let params = new HttpParams();
    params = params.set('page', page);
    params = params.set('size', size);
    return this.http.get<any>(API+'/paginator' + '?' + params.toString())
  }

  constructor(private http: HttpClient) { }
}

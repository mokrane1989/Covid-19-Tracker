import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

HttpClient
@Injectable({
  providedIn: 'root'
})
export class MapService {


  constructor(private _http: HttpClient) { }
  private dataApi = "https://corona.lmao.ninja/countries"

 
  getAll(): Observable<any>{
    return this._http.get(this.dataApi);
  }
 
}




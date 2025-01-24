import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(
    private http: HttpClient
  ) { }

  onLogin(data:any){
    return this.http.post(`https://eduaffair.co.in/api/login`,data)
  }
}

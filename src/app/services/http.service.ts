import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService implements OnInit {

  constructor(private http: HttpClient) {
    this.http.get('http://localhost:8080/');
  }

  ngOnInit(): void {
  }

  getResult(expression: string){
    return this.http.get('http://localhost:8080/' + expression, {responseType: 'text'});
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NewsService {
  constructor(private http:HttpClient){}

  apiurl="https://newsapi.org/v2/everything?q=tesla&from=2024-06-29&sortBy=publishedAt&apiKey=b7cf87c5817a47e7b3ed530fb369408f";


  getNews(): Observable<any> {
      return this.http.get<any>(this.apiurl);
    }
  

 

}
